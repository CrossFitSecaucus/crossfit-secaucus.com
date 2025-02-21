import React from 'react';
import Link from 'gatsby-link'

const Offerings = ({ heading }) => (
  <div className="container">
    <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
            <h6 className="text-muted">How can we fit your lifestyle?</h6>
            <h2 className="title">Your Workout Options</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
            <div className="card card-blog bg-warning">
                <Link to="/index.html#pricing">
                    <div className="card-header card-header-image">
                        <img src="/img/offerings/group-class-offering.jpg" />
                    </div>
                </Link>
                <div className="card-body">
                    <h3 className="card-title">CrossFit Group Classes</h3>
                    <h6 className="card-category">More than 30 class times each week</h6>
                    <p>
                      Never has it been more important to focus on your health, fitness and nutrition to ensure your body is ready for anything. <br/>
                      Our group classes consist of supportive trainers and a community that will make you want to come back for more.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card card-blog bg-info">
                <Link to="/index.html#pricing-personal-training">
                    <div className="card-header card-header-image">
                        <img src="/img/offerings/personal-training-offering.jpg" />
                    </div>
                </Link>
                <div className="card-body">
                    <h3 className="card-title">Personal Training</h3>
                    <h6 className="card-category">Pick Your Training Time</h6>
                    <p>
                      If you're looking for one-on-one sessions with your own personal trainer, we've got you covered.
                    </p>
                    <p>
                      <strong>
                        Personal training will be your fastest option to reach your fitness and physique goals.
                      </strong>
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card card-blog bg-success">
                <Link to="/index.html#pricing-at-home-workouts">
                    <div className="card-header card-header-image">
                        <img src="/img/offerings/at-home-workouts-offering.jpg" />
                    </div>
                </Link>
                <div className="card-body">
                    <h3 className="card-title">At-Home Workouts</h3>
                    <h6 className="card-category">Make Your Own Schedule</h6>
                    <p>
                      Pick up your <em>CrossFit At-Home Kit</em> and perform the daily workout at home when it suits you.
                      This option is ideal for beginners and advanced athletes alike.
                    </p>
                    <p>
                      <strong>
                        The At-Home workouts are by no means "watered down", so be ready to sweat.
                      </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default Offerings

