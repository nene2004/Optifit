# Project Video Demo

<style>
/* Demo Section Styling */
.demo-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #3F37C9;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.section-title i {
  margin-right: 0.8rem;
}

.section-description {
  font-size: 1.2rem;
  color: #4A5568;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.video-button-container {
  margin-top: 2rem;
}

.video-play-button {
  background: #4361EE;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
}

.video-play-button:hover {
  background: #3F37C9;
  transform: translateY(-3px);
  box-shadow: 0 7px 14px rgba(67, 97, 238, 0.25);
}

.video-play-button:active {
  transform: translateY(1px);
}

.video-play-button::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.video-play-button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  .video-play-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}
</style>

<div class="demo-section">
  <div class="container">
    <h2 class="section-title"><i class="fas fa-play-circle"></i> See It In Action</h2>
    <p class="section-description">Watch how real users benefit from OptiFit's features in their daily routines.</p>
    <div class="video-button-container">
      <a href="https://drive.google.com/file/d/1rbCMedHeF7Z0wzvls4hNYSjSy_ChlREb/view?usp=sharing" class="video-play-button">
        <i class="fas fa-play"></i> Watch Feature Demo
      </a>
    </div>
  </div>
</div>

<script>
function playVideo(videoSrc) {
  window.location.href = videoSrc;
}
</script>