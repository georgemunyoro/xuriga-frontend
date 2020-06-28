import React from 'react';

export default function UrlCreated(props) {
  let { url, id } = props.urlData;

  if (url.startsWith("http") == false) {
	url = "http://" + url;
  }

  return (
	<div className="url-created-container">
	  <a href={ url }><h1>xuri.ga/{ id }</h1></a>
	</div>
  )
}

async function getUrlData(id) {
  const API_URL = "http://192.168.43.1:3001";
  const rawResponse = await fetch(API_URL+"/api/urls");
  const res = await rawResponse.json();
  const data = res.data.filter(url => url.id == id);
  return {
	...data[0]
  } 
}

export async function getStaticPaths() {
  const API_URL = "http://192.168.43.1:3001";
  const rawResponse = await fetch(API_URL+"/api/urls");
  const data = await rawResponse.json();

  const paths = data.data.map(slug => {
	return {
	  params: {
		id: slug.id
	  }
	}
  });

  return {
	paths,
	fallback: false
  }
}

export async function getStaticProps({ params }) {
  const urlData = await getUrlData(params.id);
  return {
	props: {
	  urlData
	}
  }
}

