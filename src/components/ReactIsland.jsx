import { Mascot } from 'page-mascot'


export default function ReactIsland() {
    return (
        <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 9999 }}>
            <Mascot
                directions="/mascots/panda-directions.webp"
                reactions="/masc`ots/panda-reactions.webp"
            />
        </div>
    )
};