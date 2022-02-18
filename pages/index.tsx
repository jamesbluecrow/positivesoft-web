import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100vm;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HalfContainerBase = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled(HalfContainerBase)`
  background: ${({ theme }) => theme.colorYin};
`;

const RightContainer = styled(HalfContainerBase)`
  background: ${({ theme }) => theme.colorYang};
`;

const LogoImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const RightContainerTitle = styled.div`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colorYin};
  font-size: 45px;
`;

const BeliefItem = styled.div`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colorYin};
`;

const beliefs = [
  "We believe that developing software is more than writing code.",
  "We bring optimism to the groups that are building the future.",
  "Adding technical excellence, optimal processes and camaraderie are the recipe to successful teams and projects",
  "We help to deliver innovation.",
  "Engineering should be fun.",
  "Engineers with power to make decisions are more engaged.",
  "We help to automate, optimize, design, refactor and create good practices.",
];

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>PositiveSoft</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Positive software for everyone. A new way of doing things."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftContainer>
        <LogoImageContainer>
          <Image
            src="/positivesoft-logo.png"
            alt="PositiveSoft Logo"
            width={350}
            height={350}
          />
        </LogoImageContainer>
      </LeftContainer>

      <RightContainer>
        <RightContainerTitle>Our beliefs:</RightContainerTitle>
        {beliefs.map((value, index) => (
          <BeliefItem key={index}>{value}</BeliefItem>
        ))}
      </RightContainer>
    </Container>
  );
};

export default Home;
