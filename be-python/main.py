from fastapi import FastAPI


app = FastAPI


@app.get("/api/")
async def root():
    return {"message": "Hello World!"}


@app.post("/api/startgame")
def play_game():
    print("start game")
    return {"message": "Starting Game"}


@app.post("/api/checknumber")
def check_number():
    print("checking number")
    return {"message": "Checking Number"}
