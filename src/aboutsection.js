function About(){
return(
    <section class="about-section">
        <div>
          <h1 class="title" id="title">
            Want to learn
            <span class="css-span">CSS</span>
            ?<br />
            Join us for more videos.
          </h1>
          <button class="watchvideo-btn">Watch video</button>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1PnVor36_40"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
)
    
}
export default About