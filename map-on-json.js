  const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];

  const new_p = p.map((currentItem,index,arr) => {
       if(currentItem.isActive==true){
        currentItem.isActive="Available";
    }
    else{
        currentItem.isActive="Notavailable";
    }
    return currentItem;
  });


  const new_p1 = p.map((item) => ({
    ...item,
    isActive: item.isActive ? "Available" : "Not Available",
  }));
  console.log("p:",p);
  //console.log("New_p:",new_p);
  console.log("New_p1:",new_p1);
