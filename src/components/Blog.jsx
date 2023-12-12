import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Blog extends Component {

    // constructor(props){
    //   super(props);
    // }

    render() {
        return (
            <>
                <header class="masthead" style="background-image: url('assets/img/post-bg.jpg')">
                    <div class="container position-relative px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                                <div class="post-heading">
                                    <h1>Man must explore, and this is exploration at its greatest</h1>
                                    <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                                    <span class="meta">
                                        Posted by
                                        <a href="#!">Start Bootstrap</a>
                                        on August 24, 2023
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <article class="mb-4">
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5 justify-content-center">
                            <div class="col-md-10 col-lg-8 col-xl-7">
                                <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>
                                <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
                                <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>
                                <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>
                                <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>


                                <p>
                                    Placeholder text by
                                    <a href="http://spaceipsum.com/">Space Ipsum</a>
                                    &middot; Images by
                                    <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}

export default Blog;