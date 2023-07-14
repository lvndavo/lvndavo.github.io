import me from "../assets/me.jpg";

const About = () => (
  <section
    id="about"
    className="px-12 py-12 md:pt-16 h-screen flex flex-col justify-center items-center"
  >
    <div className="mb-5">
      <h1 className="font-josefinsans text-offWhite font-bold text-5xl">
        About Me
      </h1>
    </div>
    <div className="flex items-center px-10">
      <div className="px-5 flex justify-center">
        <img src={me} className="h-[350px] rounded-full" />
      </div>
      <div className="flex-1 flex flex-col font-josefinsans text-offWhite text-lg px-5">
        <p className="">
          Consequat voluptate officia nostrud velit mollit dolor duis ullamco
          consequat irure ipsum. Magna non magna proident ea. Adipisicing dolore
          nisi est fugiat nulla aliquip aliquip sit labore ex elit laborum.
          Irure nisi in tempor laborum enim laboris anim ea dolore duis.
          Consectetur elit pariatur labore ex velit incididunt. Duis commodo
          enim nisi esse non ea culpa exercitation anim nisi labore non
          cupidatat.
        </p>
        <br />
        <p>
          Laboris cupidatat consectetur nulla sint cillum qui esse sit nostrud.
          Labore Lorem elit ad incididunt Lorem. Ut ut sint sit in anim
          adipisicing proident. Dolore incididunt commodo commodo cillum laboris
          magna fugiat. Laborum ea ad deserunt sint dolor adipisicing tempor
          magna excepteur ex est eiusmod dolor. Nisi non id minim ea labore
          cupidatat commodo in. Sit laboris consectetur do ex labore. Sunt
          excepteur aliquip aliquip sint occaecat excepteur fugiat velit
          adipisicing do cillum ut. Duis amet et anim Lorem reprehenderit
          officia exercitation. Dolore fugiat ut exercitation labore cupidatat
          aliquip mollit.
        </p>
      </div>
    </div>
  </section>
);

export default About;
