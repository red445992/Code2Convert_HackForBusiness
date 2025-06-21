from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import openai
import os
from dotenv import load_dotenv
import json
import re
load_dotenv()

openai.api_key = os.getenv("GROQ_API_KEY")
openai.api_base = "https://api.groq.com/openai/v1"  # Use Groq's base URL

def extract_json_from_text(text):
    match = re.search(r"```(?:json)?\s*([\s\S]+?)\s*```", text)
    if match:
        return match.group(1)
    match = re.search(r"({[\s\S]+})", text)
    if match:
        return match.group(1)
    return text

class GenerateContent(APIView):
    def post(self, request):
        data = request.data
        product = data.get("product_name")
        description = data.get("description")
        audience = data.get("audience")
        goal = data.get("goal")
        company = data.get("company")  # dict

        if not all([product, description, audience, goal, company]):
            return Response({"error": "Missing fields"}, status=400)

        base_prompt = f"""
You are a B2B marketing expert.

Generate personalized outreach content for the following product and company:

Company:
- Name: {company.get('name')}
- Industry: {company.get('category')}
- Size: {company.get('size')}
- Description: {company.get('description')}
- Contact: {company.get('contact')}

Product:
- Name: {product}
- What it does: {description}
- Target audience: {audience}
- Goal of outreach: {goal}

Return a JSON with three fields:
1. cold_email (1 paragraph + greeting + closing)
2. pitch_deck_outline (5 bullet points)
3. one_pager (3 short sections: Problem, Solution, CTA)
"""

        try:
            response = openai.ChatCompletion.create(
                model="llama3-70b-8192",
                messages=[
                    {"role": "system", "content": "You are a helpful assistant that creates startup outreach material."},
                    {"role": "user", "content": base_prompt}
                ],
                temperature=0.7
            )
            text = response['choices'][0]['message']['content']
            print("MODEL OUTPUT:", text)

            json_str = extract_json_from_text(text)
            try:
                output = json.loads(json_str)
            except Exception as e:
                return Response({"error": "Model did not return valid JSON", "model_output": text}, status=500)

            required_keys = ["cold_email", "pitch_deck_outline", "one_pager"]
            if not all(key in output for key in required_keys):
                return Response({"error": "Missing keys in model output", "model_output": output}, status=500)

            return Response(output, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=500)