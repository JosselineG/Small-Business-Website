import './Home.css';
import Grid from '@mui/material/Grid';
import React, { Component } from 'react';

function Home() {

    return (
        <div className='HomeMain'>

            <img className='randomImg' alt={""} src={"https://picsum.photos/600/400/?blur=9"} />

            <span className='BodyText'>
                <p>Lorem ipsum dolor sit amet. Rem quisquam eveniet est dolor nihil et provident perferendis non quos omnis ea aliquam sunt. Aut porro aliquam et rerum
                    quia qui velit ipsum aut laudantium omnis. Ab ipsam omnis ex nihil dolores aut accusamus consequatur. </p>
                <p>Ut voluptas voluptas et cumque ducimus sed libero galisum et dignissimos quibusdam quo maiores dignissimos. In deserunt incidunt in
                    voluptas quos et rerum odio est iste eius! </p>
                <p>Et nesciunt nulla et debitis autem rem iste inventore eos recusandae consequatur quo obcaecati possimus qui odio velit. Ut minus error a
                    deleniti vitae et aliquam eveniet nam magni dolores non totam eaque 33 sunt cumque. Est odit excepturi ut ipsum temporibus et molestias
                    nostrum. Aut voluptatem doloremque et consectetur voluptate ut aperiam sapiente ex asperiores facere. </p>
                <p>Eum autem enim vel quia atque id saepe voluptatibus aut ipsum dolor rem omnis suscipit. Aut molestiae dolor qui quam fugiat non esse nostrum
                    sit eius dicta a laudantium blanditiis. Qui molestiae dolores aut perferendis quia in molestiae quia et quia autem non accusamus quod eum
                    unde eveniet in impedit suscipit. </p>
                <p>Vel quia commodi sit perspiciatis perferendis vel distinctio neque aut eaque veniam non consequuntur aperiam 33 illum molestiae est sapiente
                    quisquam. Et omnis nisi et ipsam illum quo cupiditate dicta et dolorum illum non excepturi nulla aut consequatur voluptatibus. </p>
            </span>



            {/* <div className='conts'>

                <Grid
                    className='rows'
                    container spacing={3}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="stretch"
                >

                    <div className='Service1' class="animate_animated animate__fadeInLeft">
                        <h3>Brakes</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service2'>
                        <h3>Tune-ups</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service3'>
                        <h3>Oil Changes</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service4'
                        <h3>General Service</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service5'>
                        <h3>Import Specialist</h3>
                        <p>we fix brakes etc</p>
                    </div>
                    <div className='Service6'>
                        <h3>A/C Service</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Inspection</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Car Audio & Video Service</h3>
                    </div>
                    <div className='Service7'>
                        <h3>Towing Services</h3>
                    </div>

                </Grid>
            </div> 
             <div className='Location'>
                {//<p>Stop by and visit us we will be here to help you!</p> }
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3002.2360241855336!2d-73.8837658!3d41.1948276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2c7964c6a2ea7%3A0xebcb8a9ce52da5ef!2sCroton%20Auto%20Repair%20LLC%20and%20Towing%20Service!5e0!3m2!1sen!2sus!4v1658458107755!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"

                ></iframe>

            </div> */}

        </div>


    )
}

export default Home;