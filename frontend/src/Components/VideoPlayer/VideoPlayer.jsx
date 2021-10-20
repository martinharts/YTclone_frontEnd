import React from "react";
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';


const VideoPlayer = ({videoID}) => {
    const videoId = "wbernJatch?v=s4Bix"
    if (!videoID){
        return (
            <Col className='loading-spinner'>
                <Button variant="dark" disabled >
                    <h3>Search for video</h3>
                    <Spinner 
                    as="span"
                    animation ="grow"
                    size ="lg"
                    role="status"
                    aria-hidden="true"
                    />
                    <h3>Loading...</h3>
                </Button>
            </Col>
        );
    }
    return(
        <Col md={10} xs={12} className="video-player mx-auto text-center py-2">
            <div className='ratio ratio-16x9'>
                <iframe
                title = {videoID}
                className="video-iframe border border-danger border-4 rounded-3 shadow"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                />
            </div>
        </Col>
    );
}


export default VideoPlayer