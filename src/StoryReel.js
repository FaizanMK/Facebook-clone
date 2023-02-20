import React from "react";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="flex ">
      <Story
        image="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/27/564ed04a-192f-44e3-a266-3472047bd2d7/Babar-Azam-Pull-Shot.png?width=500&height=500"
        // image={img}
        profileSrc="https://static.toiimg.com/photo/msid-97400680/97400680.jpg"
        title="Faizan"
      />
      <Story
        image="https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg"
        // image={img}
        profileSrc="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/27/564ed04a-192f-44e3-a266-3472047bd2d7/Babar-Azam-Pull-Shot.png?width=500&height=500"
        title="Usama"
      />
      <Story
        image="https://www.mykhel.com/thumb/247x100x233/cricket/players/1/8121.jpg"
        // image={img}
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
        title="Iftni Mania"
      />
      <Story
        image="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/330600/330686.6.jpg"
        // image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Huzaifa"
      />
      <Story
        image="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/331900/331925.3.jpg"
        // image={img}
        profileSrc="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iwnBaspHik5Q/v1/1200x-1.jpg"
        title="Babar"
      />
    </div>
  );
}

export default StoryReel;
