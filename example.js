// filter
// map
// reduce
// forEach

var arr = [
  "Mike",
  "Domingo",
  "Elijah",
  "Ralph",
  "Jai",
  "Monica",
  "Noemi",
  "Phil",
  "Kristie"
];






// forEach
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function(name){
  console.log(name);
})



// map
var newArr = arr.map(function(name){
  var obj = {};
  obj.name = name;
  obj.isCool = true;
  return obj;
});
console.log(newArr);





// main.js
var listings = data.results.map(function(listing){
  return {
    listingId: listing.listing_id,
    categoryId: listing.category_id,
    url_75x75: listing.Images[0].url_75x75
  };
});

var listingData = {
  "listings": listings
}

var listingTemplate = $("#listingTemplate").text();
var listingHTML = Mustache.render(listingTemplate, listingData);
$("#listDataContainer").html(listingHTML);


//html file
<script type="x-tmpl-mustache" id="listingTemplate">
{{#listings}}
  <span>{{listingId}}</span>
  <span>{{categoryId}}</span>
  <img src="{{url_75x75}}" />
{{/listings}}
</script>






