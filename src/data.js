let data = [{
    id: 1,
    coordinates: [0.4123,321.321],
    planter: "Keijo Katala",
    plantDate: new Date(2020, 1),
    updateDate: new Date(2021, 1),
    growth: 1,
    pictures: ["here is the image?"]
  }];

  //maybe pictures should be a dict as in {pictures: {date: new Date, collection: [blaa,blaa,blaa]}} ?
const addData = (id, coordinates, planter, plantDate, updateDate, growth, pictures) => { 
    data.push({
        id: id,
        coordinates: coordinates,
        planter: planter,
        plantDate: plantDate,
        updateDate:updateDate,
        growth: growth,
        pictures: pictures
      });
}

const updatePicture = (id, date, picture) => {
  data.forEach((x,i) => {
    if (x.id == id) {
      data[i].updateDate = date;
      data[i].pictures.push(picture);
    }
  });
}


const initData = () => {
    //addToData(int,list[float,float],"string", new Date(), new Date(), int)
    //0
    addData(data[data.length-1].id+1, [321.312,321351.23], "Heimo Heimola", new Date(2021,1), new Date(2021, 8), 0, ["here is the image?"]);
    addData(data[data.length-1].id+1, [321.312,321352.23], "Heimo Heimola", new Date(2021,3), new Date(2021, 9), 1, ["here is the image?"]);
    addData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 2,["here is the image?"]);
    //3
    addData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 2,["here is the image?"] );
    addData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 3,["here is the image?"]);
    addData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 3,["here is the image?"]);
    //6
    addData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 2,["here is the image?"]);
    addData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 3,["here is the image?"]);
    updatePicture(3,new Date(2021,12),"there is an update!");
    updatePicture(5,new Date(2021,12),"there is an update!");
    updatePicture(6,new Date(2021,12),"there is an update!");
    return data;
}
export default initData;