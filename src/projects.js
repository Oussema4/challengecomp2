function Proj(){
var arr=[{title:"Project 1",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 2",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 3",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 4",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 5",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 6",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"}
,{title:"Project 7",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"},{title:"Project 8",image:"https://images.ctfassets.net/j7pfe8y48ry3/32FQenq8swms62WyQOiMQC/c348c3553148912d25f6bc7fb47a8326/one-ten-one-hundred-series-2d339f485ef516fe44defed3eb881e85.jpg"}]
    return(
<section class="projects-section">
    {arr.map((el)=><div class="project">
          <img
            src={el.image}
            style={{width: "360px", height: "208px"}}
          />
          <h3>{el.title}</h3>
          <p>
            Explore how budgetary constraints affect <br />
            creativity–for better or worse–in our Webby <br />
            Award-winning original series.
          </p>
          <a href="#"> Explore & learn more</a><br />
        </div>)
        }
    
      </section>

    )
}
export default Proj