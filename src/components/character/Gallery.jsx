import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

import { Container, Row } from "react-bootstrap";

import axios from "axios";
import { BASE_URL, CHARACTER_PATH } from "../../constants/api";

// import { BASE_URL, TOKEN_PATH } from "../constants/api";

// An alternative is Backbone.js (not a package, so may complicate deployment procedure.)
// another is node-wpapi (cannot use auth token natively?)
// None seem to be necessary for my purposes, to be honest. So lets just use the endpoints manually.

export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getPosts() {
      try {
        const axiosInstance = axios.create({
          baseURL: BASE_URL + CHARACTER_PATH,
        });

        const response = await axiosInstance.get();
        // console.log("response set:", response.data.results);
        setPosts(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  if (loading) return <Container>Loading characters...</Container>;

  if (error) return <div>{}</div>;

  return (
    <Row>
      {posts.map((characterPost) => {
        return (
          <CharacterCard key={characterPost.id} data={characterPost}/>
        );
      })}
    </Row>
  )
}
