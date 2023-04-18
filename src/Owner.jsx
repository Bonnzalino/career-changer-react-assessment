import React from 'react'
import Layout from './Layout'
import './owner.css'

function Owner() {
  return (
    <Layout>
        <div className='biography'>
            <h1>Bonn - Project H - 44</h1>
            <img src="https://i.guim.co.uk/img/media/9ea762cf0045e7aeb0ab3a71dfaadededb39b9db/0_639_4707_2826/master/4707.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fc827fad6cf1d43ed780ac2860c147cd" style={{width: "250px"}} />
            <div className='context'>
                <h4>Short Biography:</h4>
                <br />
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id maxime odio vel fuga tenetur harum veniam quisquam libero est assumenda officiis quis modi facilis recusandae nemo, repellat fugiat laborum eaque pariatur. Quam fugit accusamus quibusdam animi voluptas iste amet voluptates. Sint a odit minus ab dolore sunt hic, facere molestias ipsum fugit mollitia, accusantium voluptatum aspernatur voluptate natus necessitatibus fuga. Totam cumque esse id laudantium laboriosam accusantium omnis? </p>
            </div>
        </div>
    </Layout>
  )
}

export default Owner