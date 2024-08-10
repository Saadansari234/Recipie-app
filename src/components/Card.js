// src/components/RecipeCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showFullTitle, setShowFullTiltle] = useState(false)
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
        setShowFullTiltle(!showFullTitle)
    };
    const truncatedTitle = recipe.name.length > 20 ? recipe.name.substring(0, 20) + '...' : recipe.name;
    const truncatedDescription = recipe.description && recipe.description.length > 50
        ? recipe.description.substring(0, 50) + '...'
        : recipe.description || 'No description available';

    return (
        <Card className="mb-5 recipe-card">
            <div className='img-container'>
                <Card.Img loading='lazy' className='card-img' variant="top" src={recipe.thumbnail_url} />
            </div>
            <Card.Body >
                <Card.Title>{showFullTitle ? recipe.name : truncatedTitle}</Card.Title>
                <Card.Text>
                    {showFullDescription ? recipe.description : truncatedDescription}
                </Card.Text>
                {recipe.original_video_url ? (
                    <Button variant="primary" href={recipe.original_video_url} target="_blank">
                        Watch Video
                    </Button>
                ) : (
                    <Button variant="primary" href={recipe.original_video_url} target="_blank">
                        Watch Video
                    </Button>
                )

                }
                {recipe.description && recipe.description.length > 50 && (
                    <Button variant="link" onClick={toggleDescription}>
                        {showFullDescription ? 'View Less' : 'View More'}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
