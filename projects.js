// Project Data Structure
// Update this file to add, edit, or remove projects

const projects = [
    {
        id: 1,
        title: "Safety-Critical Flight Controller",
        company: "AMDC Ltd.",
        category: "Embedded Systems",
        shortDescription: "DO 178C compliant system",
        fullDescription: "Developed real-time embedded flight controller for autonomous aerial systems with DO 178C DAL D compliance. The system includes sophisticated flight control algorithms, sensor fusion, and fail-safe mechanisms for safety-critical operations.",
        technologies: ["C/C++", "ARM Cortex-M7", "DO 178C DAL D", "Real-Time OS"],
        features: [
            "Real-time flight control with microsecond precision",
            "DO 178C DAL D certification compliance",
            "Multi-sensor fusion for robust state estimation",
            "Fail-safe and redundancy mechanisms",
            "Hardware-in-the-loop testing and verification"
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
        fullDescription: "Implemented multi-agent AI system orchestrating language, vision-language, and web models on Siemens industrial edge devices. Developed AI observability system to capture and analyze logs from edge applications.",
        technologies: ["PyTorch", "TensorRT-LLM", "Multi-Agent", "Industrial Edge", "MQTT"],
        features: [
            "Lightweight LLM deployment on industrial edge hardware",
            "Multi-agent system for automated testing",
            "AI observability and logging infrastructure",
            "Q&A chatbot integration with internal systems",
            "Real-time inference optimization"
        ],
        duration: "June 2025",
        image: "figures/project-llm-edge.svg",
        icon: "fa-brain"
    },
    {
        id: 3,
        title: "LLM Optimization for CPU",
        company: "Intel",
        category: "Machine Learning",
        shortDescription: "Efficient deployment on Xeon processors",
        fullDescription: "Researched and implemented optimization methods for large language models on Intel Xeon processors with 160 cores. Achieved 4x inference speed improvement through weight-only quantization and speculative decoding.",
        technologies: ["PyTorch", "OpenVINO", "Quantization", "DeepSpeed", "LoRA"],
        features: [
            "4x inference speed improvement on CPU",
            "Weight-only quantization techniques",
            "Distributed pipeline for fine-tuning",
            "LoRA optimization for memory efficiency",
            "Energy-efficient AI deployment framework"
        ],
        duration: "November 2024",
        image: "figures/project-llm-cpu.svg",
        icon: "fa-microchip"
    },
    {
        id: 4,
        title: "Embedded Computer Vision",
        company: "ITK Engineering",
        category: "Computer Vision",
        shortDescription: "Real-time temperature tracking",
        fullDescription: "Bachelor thesis project developing embedded computer vision system for real-time object detection and temperature measurement using Toradex i.MX8 platform with multi-camera setup.",
        technologies: ["OpenCV", "YOLOv5", "i.MX8", "Embedded Linux", "Qt", "C++"],
        features: [
            "Real-time object detection on embedded device",
            "Multi-camera system (Basler GigE + FLIR IR)",
            "Custom Linux kernel with Yocto",
            "Model pruning and INT8 quantization",
            "Sensor fusion for temperature estimation"
        ],
        duration: "October 2023 - March 2024",
        image: "figures/project-computer-vision.svg",
        icon: "fa-eye"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projects;
}

