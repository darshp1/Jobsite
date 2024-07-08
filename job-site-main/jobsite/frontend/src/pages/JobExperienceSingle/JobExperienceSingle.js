import { useState, useEffect } from 'react';
import { SingleJobContainer, Line } from './JobExperienceSingle.elements';
import {
	Title,
	Container,
	Content,
	Breadcumb,
	ExperienceCard,
	FluidContainer,
	LayoutContainer,
	Seo,
} from '../../components';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import Skeleton from 'react-loading-skeleton';

const JobExperienceSingle = () => {
	const [data, setData] = useState({});
	let { slug } = useParams();

	const breadData = [
		{ name: 'home', link: '/' },
		{ name: 'interview experiences', link: '/interview-experiences' },
		{
			name: data.company ? data.company : '',
			link: `/interview-experiences/${slug}`,
		},
	];
	const [is404, setIs404] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			if (is404 === true) {
				setIs404(false);
			}
			if (isLoading === false) {
				setIsLoading(true);
			}
			let apiUrl = `interview/${slug}/`;
			try {
				const response = await axios.get(apiUrl);
				setIsLoading(false);
				setData(response.data);
			} catch (error) {
				setIsLoading(false);
				setIs404(true);
			}
		};
		fetchData();
	}, [slug]);
	return (
		<LayoutContainer is404={is404}>
			<Seo title={data.title} description={data.description} />
			<FluidContainer>
				<Container>
					<Breadcumb breadData={breadData} width={'lg'} />
					<Title>{isLoading ? <Skeleton /> : data.title}</Title>
					<SingleJobContainer>
						<ExperienceCard type={'single'} {...data} />
						{/* {isLoading === false && <ShareIcon />} */}
						<Line />
						<Content>
							{isLoading ? (
								<Skeleton count={5} />
							) : (
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							)}
						</Content>
					</SingleJobContainer>
				</Container>
			</FluidContainer>
		</LayoutContainer>
	);
};

export default JobExperienceSingle;