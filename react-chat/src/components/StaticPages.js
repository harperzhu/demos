import React from 'react';

import { Redirect } from 'react-router-dom';

export function WelcomePage(props) {

  if(props.user){ //if signed in
    //instead of showing this, go to the chat page
    return <Redirect to="/chat/general" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <h2>Welcome to React Messenger!</h2>
        <p>The latest and greatest messaging app</p>
        <p><a href="/signin">Sign in to get started!</a></p>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="card bg-warning bg-gradient">
      <div className="container card-body">
        <h2>About React Messenger</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus facere repellat accusamus dicta, sit quasi ipsa, fugit ipsum tempore rerum repellendus ullam doloremque quod porro laborum et recusandae cupiditate?</p>
      </div>
    </div>
  );
}

export function ErrorPage() {
  return <p className="alert alert-danger">Page not found</p>;
}