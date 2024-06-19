function setProgress(percent) {
    const progressCircle = document.querySelector('.progress-circle');
    const color = percent > 50 ? 'green' : '#00aaff';
    progressCircle.style.background = `conic-gradient(${color} 0%, ${color} ${percent}%, #e6e6e6 ${percent}%, #e6e6e6 100%)`;
}

// Example: Set the progress to 75%
setProgress(75);
