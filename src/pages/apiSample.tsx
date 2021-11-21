import { NextPage } from 'next';
import React, { useState } from 'react';
import axios from 'axios';

const getSample = async () => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:8080/hello',
  });

  return response;
};

const getSampleUser6 = async () => {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:8080/users/6',
  });

  return response;
};

// API検証のためのもの
const APISample: NextPage = () => {
  const handleGetSampleHelloWorld = async () => {
    getSample()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleGetSampleUser6 = async () => {
    getSampleUser6()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [email, setEmail] = useState('');
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const clickSubmit = async () => {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/signup',
      data: {
        email,
        password,
      },
    });
    console.log(response);
  };
  return (
    <>
      APIsample
      <div>
        <button
          onClick={e => {
            handleGetSampleHelloWorld();
          }}
        >
          /hello
        </button>
      </div>
      <div>
        <button
          onClick={e => {
            handleGetSampleUser6();
          }}
        >
          /users/6
        </button>
      </div>
      <div>
        <input
          type="email"
          id="email"
          onChange={changeEmail}
          value={email}
          placeholder="email"
        ></input>
        <input
          type="password"
          id="password"
          onChange={changePassword}
          value={password}
          placeholder="password"
        ></input>
        <button type="submit" onClick={clickSubmit}>
          送信
        </button>
      </div>
    </>
  );
};

export default APISample;
