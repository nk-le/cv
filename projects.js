// Project Data Structure
// Update this file to add, edit, or remove projects

const projects = [
    {
        id: 1,
        title: "Flight Controller",
        company: "AMDC Ltd.",
        category: "Real-Time Embedded System",
        shortDescription: "Safety-compliant autonomous aerial system",
        fullDescription: "This project develops a certifiable flight controller featuring three core subsystems: control algorithms, sensor fusion, and safety mechanisms. The control system runs on ARM microcontrollers with a real-time operating system (RTOS), achieving robust stable flight control. Sensor fusion integrates data from IMU, GPS, barometric, and magnetometer sensors with fault-tolerant operation—maintaining functionality despite individual sensor failures. Safety is enforced through a real-time scheduler for deterministic task execution, watchdog timers for system health monitoring, and automatic failsafe mode transitions. The system underwent aviation safety certification and comprehensive hardware-in-the-loop (HIL) testing across various flight scenarios and failure conditions.",
        technologies: ["C/C++", "ARM Microcontroller", "Certification", "Real-Time OS"],
        features: [
            "Real-time flight control system",
            "V-Model Development",
            "Safety compliant"
        ],
        duration: "Sep 2023 - Present",
        image: "figures/project-flight-controller.svg",
        icon: "fa-helicopter"
    },
    {
        id: 2,
        title: "LLM Deployment on Edge",
        company: "Siemens",
        category: "AI & Edge Computing",
        shortDescription: "Multi-agent AI system on industrial devices",
        fullDescription: "This project automates web testing and provides AI services on industrial edge devices with limited resources. The system has three parts: a multi-agent coordinator, AI models, and a monitoring system. The coordinator manages multiple AI agents that work together. Each agent does a different job: one handles UI interaction, another checks content, and another finds errors. The language models understand text questions. Vision-language models analyze screenshots. Web models interact with web applications. All models communicate using MQTT, a message system that works even when the network is unreliable. The monitoring system collects and analyzes logs from all edge devices. It shows how models behave and how fast they work. We used TensorRT-LLM to make language models run faster on edge hardware. We also built a Q&A chatbot for Siemens employees to ask questions about company information. We chose a multi-agent design because it makes testing easier to organize and each agent can focus on one task.",
        technologies: ["PyTorch", "TensorRT-LLM", "Multi-Agent", "Industrial Edge", "MQTT"],
        features: [
            "Lightweight LLM deployment on industrial edge hardware",
            "Multi-agent system for automated testing",
            "AI observability and logging infrastructure",
            "Q&A chatbot integration with internal systems",
            "Real-time inference optimization"
        ],
        duration: "June 2025",
        image: "images/siemens.jpeg",
        icon: "fa-brain"
    },
    {
        id: 3,
        title: "LLM Optimization for CPU",
        company: "Intel",
        category: "Machine Learning",
        shortDescription: "Efficient deployment on Xeon processors",
        fullDescription: "This project tests if CPUs can run large language models cheaper and more efficiently than GPUs. The system has three parts: a testing framework, optimization methods, and a distributed pipeline. The testing framework runs Llama models on Intel Xeon processors with 160 cores. It uses AMX instructions to speed up matrix calculations. The framework compares energy use, speed, and total cost between CPU and GPU systems. We benchmarked INT8 quantized models and measured throughput performance across different configurations. The benchmark results show how INT8 quantization improves inference speed while maintaining accuracy. Weight-only quantization changes model weights from 32-bit to 8-bit numbers. This keeps accuracy but uses less memory. Speculative decoding uses a small model to guess tokens first, then a larger model checks them. This reduces expensive calculations. We first quantize the model to save memory, then use speculative decoding to make it faster. Together, this gives 4x speed improvement. The distributed pipeline uses all 160 CPU cores by splitting the model across cores. DeepSpeed helps cores communicate efficiently. We used LoRA for fine-tuning because it needs much less memory than full fine-tuning. This makes it possible on CPUs. The framework helps organizations use their existing CPU hardware for AI. Our research shows CPU deployment can work well when you consider total cost and energy use.",
        technologies: ["PyTorch", "OpenVINO", "Quantization", "DeepSpeed", "LoRA"],
        features: [
            "4x inference speed improvement on CPU",
            "Weight-only quantization techniques",
            "INT8 quantization benchmark and throughput analysis",
            "Distributed pipeline for fine-tuning",
            "LoRA optimization for memory efficiency",
            "Energy-efficient AI deployment framework"
        ],
        duration: "November 2024",
        image: "images/llama.png",
        benchmarkImage: "images/int8_throughput_evenly_spaced.png",
        icon: "fa-microchip"
    },
    {
        id: 4,
        title: "Embedded Computer Vision",
        company: "ITK Engineering",
        category: "Computer Vision",
        shortDescription: "Real-time temperature tracking",
        fullDescription: "This project created a smart fridge for trade fairs that finds food items and measures their temperature in real-time. The system has three parts: an embedded computer board, two cameras, and a vision processing system. We used a Toradex Colibri i.MX8QXP board because it has different processors for different tasks. One camera (Basler GigE) takes color images to find objects. The other camera (FLIR Lepton) measures temperature. Both cameras send data to a C++ program with multiple threads. Separate threads handle camera capture, image processing, and AI inference. This uses the board's parallel processing power. The YOLOv5 model finds food items in color images. We used structural pruning to remove unnecessary connections and INT8 quantization to reduce precision. Both techniques make the model smaller and faster on the embedded device. The sensor fusion module combines object locations from the color camera with temperature data from the thermal camera. This is needed because thermal cameras have lower resolution, but the color camera shows exact object edges. We built a custom Linux system using Yocto. This lets us compile code on x86 computers and run it on the arm64 board. It also includes only the needed parts for our hardware. We added Qt framework to show a user interface at trade fairs.",
        technologies: ["OpenCV", "YOLOv5", "i.MX8", "Embedded Linux", "Qt"],
        features: [
            "Real-time object detection on embedded device",
            "Multi-camera system (Basler GigE + FLIR IR)",
            "Custom Linux kernel with Yocto",
            "Model pruning and INT8 quantization",
            "Sensor fusion for temperature estimation"
        ],
        duration: "October 2023 - March 2024",
        image: "images/concatimage_best.jpg",
        detailImage: "images/hardware.png",
        icon: "fa-eye"
    },
    {
        id: 5,
        title: "IoT Smart Library",
        company: "TUM",
        category: "AI & Edge Computing",
        shortDescription: "Edge AI pipeline for real-time people monitoring",
        fullDescription: "This project built a smart library system that counts people and provides personalized services. The system has three parts: camera modules at library entrances, a central Raspberry Pi for AI processing, and a communication system. ESP32-CAM modules take pictures and compress them locally. Then they send the images to a Raspberry Pi using MQTT. We chose this design because ESP32-CAM modules are cheap and use little power, but they cannot run AI models fast enough. The Raspberry Pi has enough power for AI inference. We optimized two SSD-Mobilenetv2 models: one finds people and another recognizes the same person again. Structural pruning removes unnecessary connections in the model. INT8 quantization-aware training reduces precision during training so the model stays accurate after quantization. We first prune the model to make it smaller, then use quantization-aware training to keep accuracy above 90%. Together, these changes reduce memory by 4 times and make inference 90% faster. This makes real-time processing possible on the Raspberry Pi. We used Docker to make deployment consistent across different Raspberry Pi models and to manage software dependencies easily. We added an NFC card reader so users can log in. This lets the system provide personalized services based on who is detected. We chose MQTT because it reliably delivers messages and supports multiple cameras talking to one Raspberry Pi.",
        technologies: ["PyTorch", "C++", "MQTT", "Docker", "TVM"],
        features: [
            "Edge AI pipeline with ESP32-CAM modules and MQTT communication",
            "Optimized 2 >90% accurate SSD-Mobilenetv2 models with structural pruning",
            "INT8 quantization and quantization-aware training",
            "4× memory reduction and 90% inference speed improvement",
            "Dockerized system with NFC card reader integration"
        ],
        duration: "October 2024",
        image: "images/objectdetection.png",
        benchmarkImage: "images/benchmark.png",
        icon: "fa-book"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}

