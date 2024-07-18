# from fastapi import FastAPI, HTTPException, Request
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import cv2
# import numpy as np
# import base64
# from io import BytesIO
# from PIL import Image
# import logging

# app = FastAPI()

# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:3000",  # React dev server
#         "https://forexaibot.vercel.app"  # Vercel deployment
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class ChartData(BaseModel):
#     chartDataUrl: str

# def compare_chart(captured_chart, full_image_path):
#     captured_chart = np.array(captured_chart.convert('L'))

#     orb = cv2.ORB_create()
#     kp1, des1 = orb.detectAndCompute(captured_chart, None)

#     full_image = cv2.imread(full_image_path, cv2.IMREAD_GRAYSCALE)
#     best_match = None
#     best_match_score = float('inf')
#     height, width = captured_chart.shape

#     for y in range(0, full_image.shape[0] - height, height):
#         for x in range(0, full_image.shape[1] - width, width):
#             sub_image = full_image[y:y+height, x+x+width]
#             kp2, des2 = orb.detectAndCompute(sub_image, None)
#             bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
#             matches = bf.match(des1, des2)
#             match_score = sum([match.distance for match in matches])

#             if match_score < best_match_score:
#                 best_match_score = match_score
#                 best_match = sub_image

#     if best_match is not None:
#         direction = determine_arrow_direction(best_match)
#         return direction
#     return None

# def determine_arrow_direction(image):
#     edges = cv2.Canny(image, 50, 150, apertureSize=3)
#     lines = cv2.HoughLines(edges, 1, np.pi / 180, 200)
#     if lines is not None:
#         for line in lines:
#             rho, theta = line[0]
#             if 0 < theta < np.pi / 2:
#                 return 'buy'
#             else:
#                 return 'sell'
#     return 'unknown'

# @app.post('/api/compare-chart')
# async def compare_chart_endpoint(chart_data: ChartData):
#     chart_data_url = chart_data.chartDataUrl
#     chart_data = base64.b64decode(chart_data_url.split(',')[1])
#     captured_chart = Image.open(BytesIO(chart_data))

#     full_image_path = 'full_image.png' 

#     result = compare_chart(captured_chart, full_image_path)
#     if result is None:
#         raise HTTPException(status_code=500, detail="Error in comparing chart")
#     return {"result": result}

# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host='127.0.0.1', port=8000, log_level="info")

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import cv2
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import logging

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React dev server
        "https://forexaibot.vercel.app"  # Vercel deployment
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChartData(BaseModel):
    chartDataUrl: str

def compare_chart(captured_chart, full_image_path):
    captured_chart = np.array(captured_chart.convert('L'))

    orb = cv2.ORB_create()
    kp1, des1 = orb.detectAndCompute(captured_chart, None)

    full_image = cv2.imread(full_image_path, cv2.IMREAD_GRAYSCALE)
    best_match = None
    best_match_score = float('inf')
    height, width = captured_chart.shape

    for y in range(0, full_image.shape[0] - height, height):
        for x in range(0, full_image.shape[1] - width, width):
            sub_image = full_image[y+y+height, x+x+width]
            kp2, des2 = orb.detectAndCompute(sub_image, None)
            bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
            matches = bf.match(des1, des2)
            match_score = sum([match.distance for match in matches])

            if match_score < best_match_score:
                best_match_score = match_score
                best_match = sub_image

    if best_match is not None:
        direction = determine_arrow_direction(best_match)
        return direction
    return None

def determine_arrow_direction(image):
    edges = cv2.Canny(image, 50, 150, apertureSize=3)
    lines = cv2.HoughLines(edges, 1, np.pi / 180, 200)
    if lines is not None:
        for line in lines:
            rho, theta = line[0]
            if 0 < theta < np.pi / 2:
                return 'buy'
            else:
                return 'sell'
    return 'unknown'

@app.post('/api/compare-chart')
async def compare_chart_endpoint(chart_data: ChartData):
    chart_data_url = chart_data.chartDataUrl
    chart_data = base64.b64decode(chart_data_url.split(',')[1])
    captured_chart = Image.open(BytesIO(chart_data))

    full_image_path = 'full_image.png' 

    result = compare_chart(captured_chart, full_image_path)
    if result is None:
        raise HTTPException(status_code=500, detail="Error in comparing chart")
    return {"result": result}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000, log_level="info")
