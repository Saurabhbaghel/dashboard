## Introduction

### Tech Stack:

#### Frontend:
1. TypeScript
2. React 
3. Shadcn/ui (https://github.com/shadcn-ui/ui)

#### For Charts:
1. Recharts (https://recharts.org/en-US/)

#### For Backend
1. Python
2. FastAPI

#### AI/LLM
1. OpenAI AssistantAPI using `GPT-3.5-Turbo-0125` 


## Getting Started

Add the OpenAI Key to the Environment.<br><br>


This implementation is build using <b>Shadcn/ui</b> (https://github.com/shadcn-ui/ui). Therefore, you would be required to install the components. <br>
You could follow https://github.com/Poseiden1/shadcn-installer.<br><br>


Install Python packages:
```bash
$ cd dashboard
$ pip install -r requirements.txt
```

Install node packages:
```bash
$ npm install
```

Run the development server:

```bash
$ npm run dev
```

Then, start the Fastapi service:
```bash
$ uvicorn api/index:app --reload
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
