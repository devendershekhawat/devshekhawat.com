const Emoji = ({char}: {char:string}) => (
    <span className="text-xl md:text-4xl hover:scale-[2.4] transition-all duration-400 cursor-pointer">{char}</span>
);

const Emojis = () => (
    <div className="flex gap-3 text-center w-full justify-center my-10">
        {['🛌', '🧑‍💻', '🧘', '🏃', '🛀', '🧑‍💻', '🥣', '🧑‍💻', '🍻', '🧑‍💻', '🛌']
            .map((ch) => <Emoji char={ch} />)}
    </div>
)

export default Emojis;
