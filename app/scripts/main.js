$(document).ready(function(){
  var listings = new Listings([
      new Listing({ title: 'Wet Cat'}),
      new Listing({ title: 'Bitey Cat'}),
      new Listing({ title: 'Surprised Cat'})
  ]);

  Estate.start({listings: listings});

  listings.add(new Listing({
    title: 'Cranky Cat',
  }));
});
