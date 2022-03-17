import React from 'react'
import styled from 'styled-components'

const SvgContainer = styled.div `
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 21;
    width: 350px;
    height: 350px;

    .path-slider__item {
        cursor: pointer;
    }
`

function SvgSlider() {
  return (
    <SvgContainer className='path-slider'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 414 414"
            xmlSpace="preserve"
            >
            <path
                className="transrg"
                style={{
                opacity: 0.4,
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                enableBackground: "new",
                }}
                d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
            />
            <path
                className="transrgwht path-slider__path"
                strokeDasharray="0,1000"
                style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                strokeMiterlimit: 10,
                strokeDasharray: "0,1000",
                }}
                d="M84.2 85c31.3-31.5 74.7-51 122.7-51 95.5 0 173 77.5 173 173s-77.5 173-173 173c-47.8 0-91-19.4-122.3-50.7"
            />
            <g className="dots-nav-1 path-slider__item">
                <path
                className="dotsst dotsfill1"
                style={{
                    fill: "#0092ff",
                    opacity: 1,
                }}
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
                <path
                className="dotsstro1"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M84 80c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
            </g>
            <g className="dots-nav-2 path-slider__item path-slider__item-2">
                <path
                className="dotsst dotsfill2"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                />
                <path
                className="dotsstro2"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M206.8 29c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                />
            </g>
            <g className="dots-nav-3 path-slider__item">
                <path
                className="dotsst dotsfill3"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
                <path
                className="dotsstro3"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M332 85c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
            </g>
            <g className="dots-nav-4 path-slider__item">
                <path
                className="dotsst dotsfill4"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
                <path
                className="dotsstro4"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M380 205c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-3-6-6-6z"
                />
            </g>
            <g className="dots-nav-5 path-slider__item">
                <path
                className="dotsst dotsfill5"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                />
                <path
                className="dotsstro5"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M335 315c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                />
            </g>
            <g className="dots-nav-6 path-slider__item">
                <path
                className="dotsst dotsfill6"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                />
                <path
                className="dotsstro6"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M210 375c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-1-6-6-6z"
                />
            </g>
            <g className="dots-nav-7 path-slider__item">
                <path
                className="dotsst dotsfill7"
                style={{
                    fill: "#ccc",
                    opacity: 1,
                }}
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                />
                <path
                className="dotsstro7"
                style={{
                    opacity: 1,
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 2,
                    strokeMiterlimit: 10,
                }}
                d="M88 324c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2-6-6-6z"
                />
            </g>
            </svg>
    </SvgContainer>
  )
}

export default SvgSlider