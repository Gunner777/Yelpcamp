var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1568283096533-078a24930eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1568214697537-ace27ffd6cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1446080501695-8e929f879f2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    }
];

function seedDB(){
    // REMOVE ALL CAMPGROUNDS
    
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //ADD A FEW CAMPGROUNDS

        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    //ADD COMMENTS
                    Comment.create(
                        {
                            text: "This place is great but i wish there was internet!",
                            author: "Homer",
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                    });
                }
            });
        });
    });

    //ADD A FEW COMMENTS
}

module.exports = seedDB;
