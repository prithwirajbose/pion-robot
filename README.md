# Pion-Robot — Raspberry Pi GPT-powered Talking Bot

Pion-Robot is a small hobby project that runs on a Raspberry Pi and provides a talking AI robot powered by a GPT-style agent. It combines a Python backend (the AI agent and voice I/O) with a lightweight HTML/CSS/JavaScript "robot face" for visual output displayed on the Pi's screen.

Developer: [Prithwiraj Bose](https://sribasu.com)

## Project overview

- Purpose: Create an interactive robot that speaks and listens to users using a GPT model backend and shows a visual face on the Raspberry Pi display.
- Languages: Python (AI agent and voice), HTML/CSS/JavaScript (robot face UI).
- Intended hardware: Raspberry Pi with a display and microphone/speaker.

## Repository structure

```
index.html      # Robot face markup (displayed fullscreen on the Pi)
style.css       # Styles for the robot face
script.js       # Client-side animation and interaction logic
README.md       # This file
```

Note: The Python agent code (AI logic, speech I/O, and model integration) should live alongside these files in this workspace. If you have a separate directory for Python code (for example `agent/`), add it to the structure above.

## Features

- GPT-based conversational agent (Python)
- Text-to-Speech (TTS) for spoken responses
- Speech-to-Text (STT) for user input
- Simple HTML/JS robot face to show expressions and speaking animation on the Pi display

## Getting started (Raspberry Pi)

1. Install system dependencies on the Raspberry Pi (example for Raspberry Pi OS):

```bash
# Update and install essentials
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3 python3-venv python3-pip mpg123
```

2. Create a Python virtual environment and install Python dependencies. Add your preferred libraries (for example `openai`, `whisper`, `sounddevice`, `pyttsx3`, or others depending on your chosen STT/TTS/model):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
# Example (replace with libraries you actually use)
pip install openai sounddevice pyttsx3 websocket-client
```

3. Configure API keys and credentials as environment variables. For example (if using OpenAI APIs):

```bash
export OPENAI_API_KEY="your_api_key_here"
```

4. Run the Python agent (example):

```bash
source .venv/bin/activate
python agent/main.py
```

5. Open the robot face on the Pi display. You can use a lightweight browser like `chromium-browser` in kiosk/fullscreen mode:

```bash
chromium-browser --kiosk file:///home/pi/workspaces/python/pion-robot/index.html
```

Adjust the file path to match your workspace location.

## Integration notes

- The frontend (`index.html`, `script.js`) and the Python agent communicate typically over a local WebSocket or HTTP endpoint. The Python backend sends events to the frontend (for example, "speak start", "speak end", mouth animation frames, expression changes) and the frontend displays them.
- The Python agent handles STT (capturing and transcribing microphone audio) and TTS (converting text responses to audio and playing them). Keep audio playback in sync with the visual speaking animation by sending start/end events to the frontend.
- If you use a local model (on-device) or an external API, document it in your Python code and README.

## Tips for Pi performance

- Use lightweight TTS engines on-device (for example `espeak`/`espeak-ng`) if you don't need high-quality voices.
- Offload heavy model inference to a server if the Pi is underpowered.
- Reduce browser animation complexity to keep CPU usage low.

## Extending the project

- Add a proper Python package layout and a `requirements.txt` or `pyproject.toml` to track dependencies.
- Add a WebSocket API contract between backend and frontend (simple JSON messages with `type` and `payload`).
- Add tests for the Python agent and a small demo script that simulates a conversation.

## License

This project has no license specified. Add a `LICENSE` file if you want to make the project open source and select an appropriate license.

## Contact

Developer: [Prithwiraj Bose](https://sribasu.com)
