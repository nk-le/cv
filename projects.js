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
        fullDescription: "This project helps Siemens debug applications and automate testing using a multi-agent system. Large language models plan and reason, vision-language models understand screenshots, and web models perform web actions. A central coordinator assigns tasks to each agent, enabling efficient, reliable testing on industrial edge devices.",
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
        fullDescription: "This project aims to optimize large language models on CPUs for cost- and energy-efficient deployment. We run LLaMA models on 160-core Intel Xeon processors using AMX acceleration and compare performance, energy consumption, and total cost against GPU systems. By combining INT8 weight-only quantization with speculative decoding, we achieve up to a 4× speedup while preserving accuracy. A distributed pipeline with DeepSpeed scales inference across all CPU cores, and LoRA enables memory-efficient fine-tuning. The results show that CPUs can effectively support LLM workloads using existing hardware.",
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
        fullDescription: "This project aims to detect food items and measure their temperature inside a fridge. The system uses an embedded board, an RGB camera for object detection, and a thermal camera for temperature measurement. An A.I. model runs on the device, optimized with pruning and INT8 quantization for fast inference. The system fuses RGB and thermal data to assign accurate temperatures to detected items and displays the results through a simple user interface.",
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

