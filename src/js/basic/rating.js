const rating = (data, active_selector) => {
  const rating = document.querySelector(data).dataset.rating,
        active = document.querySelector(active_selector);

  setrating(rating, active);

  function setrating(rating, active){
    if(rating > 5){rating = 5;}
    else if(rating < 0){rating = 0;}

    let counter = rating * 20;
    active.style.cssText = `width:${counter}%`;
  }
};

export default rating;