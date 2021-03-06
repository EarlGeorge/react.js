import styled from 'styled-components'
import svg from '../../images/icons.svg'

const AuthForm = styled.div`

	.container {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 7px 10px 20px rgba(231, 207, 207, 0.705);
		position: relative;
		overflow: hidden;
		width: 768px;
		max-width: 100%;
		min-height: 480px;
		box-sizing: border-box;
		margin: 10px;
		margin-bottom: 90px;
		
		@media (max-width: 776px) {
			min-height: 550px;
		}
		
		button {
			cursor: pointer;
			border-radius: 25px;
			border: 1px solid #ff0000;
			background: linear-gradient(to right, #ff0000, #dc281e);
			color: #FFFFFF;
			font-size: 12px;
			font-weight: bold;
			padding: 12px 45px;
			letter-spacing: 1px;
			text-transform: uppercase;
			transition: transform 80ms ease-in;
			
			&:active {
				transform: scale(1.1);
				box-shadow: 0px 4px 10px 1px rgb(253, 153, 135);
			}

			&:focus {
				outline: none;
			}
		}
		/* // Form 😎	 */
		form {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			padding: 0 50px;
		
			/* height: 100%;  */
		
			text-align: center;

			h1 {
				font-weight: bold;
				margin: 0;
			}
			
			span {
				font-size: 12px;
			}

			input {
				background-color: #eee;
				border: none;
				padding: 12px 15px;
				margin: 8px 0;
				width: 100%;
			}
			
			a {
				color: #333;
				font-size: 12px;
				text-decoration: none;
				margin: 10px 0;
			}
		}
		
		.signUp {
			form {
				h1 {
					font-weight: bold;
					margin: 35px
				}
				@media (max-width: 776px) {
					h1{
						font-weight: bold;
						// margin: 35px 0;
						top: 25px;
						position: relative;
					}
				}
			}
		}
	}


	.resetPassword {
		form {
			h1 {
				margin: 0;
				padding: 0 70px;
			}
			div,span {
				visibility: hidden;
			};
			input[type=password] {
				visibility: hidden;
			}
			button {
				visibility: hidden;
			}
			a {
				font-size: 18px;
				&:hover {
					color: red
				}
			}
		}
	}


	.formCon {
		position: absolute;
		height: 100%;
		transition: all 0.6s ease-in-out;
	}

	.signIn {
		position: absolute;
		top: 45px;
		height: 100%;
		left: 0;
		width: 50%;
		z-index: 2;

		@media (max-width: 776px) {
			top: 3px;
			width: 100%
		}
	}

	.signUp {
		position: absolute;
		top: -43px;
		height: 100%;
		left: 0;
		width: 50%;
		opacity: 0;
		z-index: 1;

		@media (max-width: 776px) {
			top: -100px;
			width: 100%;
			height: 90%;
			opacity: 1;
		}
	}

	@keyframes show {
		0%, 49.99% {
			opacity: 0;
			z-index: 1;
		}
		
		50%, 100% {
			opacity: 1;
			z-index: 5;
		}
	}

	.overlayContainer {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 100;

		/* // for small device  */
		@media (max-width: 776px) {
			/* position: relative; */
			top: 357px;
			left: 0;
			width: 100%;
		}

		p {
			font-size: 14px;
			font-weight: 100;
			line-height: 20px;
			letter-spacing: 0.5px;
			margin: 20px 0 30px;
			padding: 0 20px;
			@media (max-width: 776px) {
				font-size: 10px;
				line-height: 20px;
				letter-spacing: 0.5px;
				margin: 20px 10 30px;
			}
		}

		.overlay {
			background: linear-gradient(to right, #283048, #859398);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 0 0;
			color: whitesmoke;
			position: relative;
			left: -100%;
			height: 100%;
			width: 200%;
			transform: translateX(0);
			transition: transform 0.6s ease-in-out;

			button {
				background: none;
				border-color: #FFFFFF;
				&:active {
					box-shadow: 1px 2px 10px 1px rgba(255, 255, 255, 0.22);
				}
			}
		}
	}


	.overlayActive {
		.overlay {
			transform: translateX(50%);
		}
		.signIn {
			transform: translateX(100%);
		}
		.signUp {
			transform: translateX(100%);
			opacity: 1;
			z-index: 5;
			animation: show 0.6s;
		}
		
		.overlayLeft {
			transform: translateX(-2%);
		}
		.overlayRight {
			transform: translateX(20%);
		}

		/* // for desktop slide only */
		@media (min-width: 800px) {
			.overlayContainer {
				transform: translateX(-100%)
			}
		}
		/* // for small device  */
		@media (max-width: 776px) {
			.signUp {
				transform: translateX(1%);
			}
		}
	}

	.overlayLeft {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		top: -10px;
		height: 100%;
		width: 50%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;

		@media (max-width: 776px) {
			right: auto;
			top: -10px;
		}
	}

	.overlayRight {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		padding: 0 40px;
		top: -10px;
		right: -50px;
		height: 100%;
		width: 50%;
		transition: transform 0.6s ease-in-out;

		@media (max-width: 776px) {
			width: 145%;
			right:auto;
			padding: 0 20px;
			top: -250px;
		}
	}

	/* // Social Icons 😎 */
	.social {
		position: relative;
		padding: 15px 10px;

		.icon {
			position: relative;
			display: inline-block;
			-webkit-perspective: 80px;
			perspective: 80px;
			overflow: visible;
			border-radius: 0%;
			border: 1px solid #DDDDDD;
			background: rgb(99, 111, 131);
			margin: 9px;
			width: 43px;
			height: 43px;
		}
		
		.icon::before,
		.icon::after {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url(${svg}), none;
			content: "";
			-webkit-transition: all 0.7s;
			transition: all 0.7s;
		}
		
		.icon::after {
			z-index: 1;
			opacity: 0;
			-webkit-transform: translateY(48px) rotateX(-90deg);
			transform: translateY(48px) rotateX(-90deg);
		}
		
		.icon:hover::before {
			opacity: 0;
			-webkit-transform: translateY(-40px) rotateX(90deg);
			transform: translateY(-40px) rotateX(90deg);	
		}
		
		.icon:hover::after {
			opacity: 1;
			-webkit-transform: rotateX(0);
			transform: rotateX(0);
		}
		
		/* facebook */
		.icon.facebook::before,
		.icon.facebook::after {
			background-position: -10px -10px;
		}
		
		.icon.facebook::after {
			background-color: #3b5998;
		}
		
		/* instagram */
		.icon.instagram::before,
		.icon.instagram::after {
			background-position: -108.5px -12px;
		}
		
		.icon.instagram::after {
			background-color: rgba(195,72,128, 1);
		}
		
		/* google */
		.icon.google::before,
		.icon.google::after {
			background-position: -197px -10px;
		}
		
		.icon.google::after {
			background-color: #ea4335;
		}
		
		/* github */
		.icon.github::before,
		.icon.github::after {
			background-position: -301px -12px;
		}
		
		.icon.github::after {
			background-color: #333333;
		}
		
		/* twitter */
		.icon.twitter::before,
		.icon.twitter::after {
			background-position: -393.5px -12px;
		}
		
		.icon.twitter::after {
			background-color: rgba(44,167,225, 1);
		}
	}


	.formAnim {
		animation: slit-in-diagonal-1 1.80s ease-in-out alternate-reverse both;
	}

	@keyframes slit-in-diagonal-1 {
		0% {
			transform: translateZ(-1400px) rotate3d(-30, -40, -20, 90deg);
			animation-timing-function: ease-in;
			transform-origin: bottom; //
			transform: rotateX(0); // ?
			opacity: 0;
		}
		54% {
			transform: translateZ(-160px) rotate3d(-30, -40, -20, 87deg);
			animation-timing-function: ease-in-out;
			opacity: 1;
			transform: scale(1.1);
		}
		100% {
			transform: translateZ(0) rotate3d(-30, -40, 100, -100);
			animation-timing-function: ease-out;
			transform-origin: bottom;   //
			transform: rotateX(100deg); // ?
			transform: scale(1);
		}
	}

`

export { AuthForm }