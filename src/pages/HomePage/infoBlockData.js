import CompanyCard from '@components/CompanyCard';
import clickbus from '@assets/png/clickbus.png';
import dasa from '@assets/png/dasa.png';
import stefanini from '@assets/png/stefanini.png';
import stone from '@assets/png/stone.png';

import defaultClasses from './homepage.module.scss';

const infoBlockData = [
    {
        align: 'center',
        title: 'O lugar ideal',
        description: `As melhores empresas reunidas com o mesmo propósito. Te achar!`,
        content: (
            <div className={defaultClasses.cardsContainer}>
                <CompanyCard src={stone} />
                <CompanyCard src={dasa} />
                <CompanyCard src={clickbus} />
                <CompanyCard src={stefanini} />
            </div>
        )
    },
    {
        align: 'center',
        title: 'Você pode mais!',
        description: 'Damos todo o apoio necessário para que você descubra mais sobre o seu novo eu.',
        content: (
            <p>Test</p>
        )
    },
    {
        align: 'center',
        title: 'Ensine e aprenda',
        description: 'O sistema de mentoria ajuda quem precisa de direcionamento para o mercade de tabalho',
        content: (
            <p>Test</p>
        )
    },
    {
        align: 'center',
        title: 'Mude de vida',
        description: 'Veja quem conseguiu o emprego perfeito e se inspire, você será o próximo',
        content: (
            <p>Test</p>
        )
    }
]

export default infoBlockData;