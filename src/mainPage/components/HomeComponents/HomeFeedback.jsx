export const HomeFeedback = (id) => {

  //Here I made a simple slider with local data that can be modified

  const click = (id) =>{
    
    const slider = document.querySelector('.slider');
    const Allbuttons = document.querySelectorAll('.button')
    const button = document.querySelector(`#button-${id}`);

    Allbuttons.forEach(e => e.style.backgroundColor = 'rgb(97, 97, 97)'); //Buttons styling depending on the sub-slider
    button.style.backgroundColor = 'rgb(48, 48, 48)'

    var value = `translateX(-${(id - 1)*100}%)`; //Here I use translateX to move the slider depending on what button was clicked.
    slider.style.transform = String(value);

  }
  
  const sliderInfo = [
    {
      id : 1,
      name : 'Lorem Ipsum',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit ligula purus, a placerat neque tempus a. Cras vel volutpat turpis. Quisque ac erat vestibulum, maximus libero ut, egestas diam. Suspendisse potenti. Aenean quis tellus dignissim, ornare purus non, facilisis nulla. Morbi eu ultrices purus. Pellentesque consequat sapien non faucibus blandit.',
      img : './coffee-about/Portraits/NullaSit.jpg'

    },{

      id : 2,
      name : 'Nunc viverra',
      content : 'In fringilla lacinia metus vitae gravida. Proin lacinia sodales elit mollis posuere. Maecenas fermentum erat lorem, commodo lobortis tellus rhoncus a. Sed iaculis diam id justo feugiat, eu commodo tellus porta. Cras tortor neque, mattis non molestie vel, mollis sit amet nibh. Proin consequat erat ac sollicitudin dapibus. Sed fringilla.',
      img : './coffee-about/Portraits/NamRutrum.jpg'

    },{

      id : 3,
      name : 'Quisque sit',
      content : 'Interdum et malesuada fames ac ante ipsum primis in faucibus. In vestibulum nibh et elit accumsan, non egestas est mollis. Donec efficitur massa sed feugiat vulputate. Proin ornare orci elit, ac hendrerit felis malesuada ac. Maecenas sapien velit, pretium sed mollis et, molestie id tortor. Nulla eget finibus sapien. Aliquam.',
      img : './coffee-about/Portraits/PellentesqueArcu.jpg'

    }
] 

  return (
    <section className='home-fb-container'>
      
      <div className='home-fb-slider-wrapper'>
        <div className='slider'>
          {sliderInfo.map(e => 
          <div key={e.id} id={`slide-${e.id}`} className = 'sliderSub'>
            <div>
              <h1 className='slider-title'>{e.name}</h1>
              <h2 className='slider-content'>{e.content}</h2>
            </div>
            <img className='slider-img' src={e.img}></img>
          </div>
          )}
        </div>
        <div className='slider-nav'>
            {sliderInfo.map(e => 
              <button className='button' id={`button-${e.id}`} key={e.id} onClick={() => {click(e.id)}} ></button>
            )}

        </div>
      </div>

    </section>
    
  )
}
