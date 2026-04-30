import os

def ensure_model_dir():
    if not os.path.exists("model"):
        os.makedirs("model")

if __name__ == "__main__":
    ensure_model_dir()