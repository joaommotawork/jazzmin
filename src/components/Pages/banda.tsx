import React from 'react'

type Props = {}

function Banda({}: Props) {
  return (
		<div
			id='banda'
			className='flex flex-col items-center justify-center gap-3 p-5 lg:p-20'>
			<h1 className='text-3xl font-medium underline uppercase lg:text-5xl md:w-2/3 underline-offset-8 decoration-orange-500 lg:pb-5'>
				A Banda
			</h1>
			<p className='text-justify md:w-2/3 indent-3'>
				Jazzmin é um colectivo musical que se dedica sobretudo à
				exploração da música tradicional açoriana, fundindo-a com as
				sonoridades jazzísticas dos mais emblemático standards do
				cancioneiro americano e com popular a música francesa. O grupo
				nasceu na ilha do Pico e é constituído por seis músicos que nela
				nasceram ou residem:
				<ol className='flex flex-col gap-2'>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- Jean Daniel Senesi na Voz
						</p>
						<span className='text-justify md:w-2/3 indent-3'>
							É cantor profissional, com mais de 20 anos de
							carreira, e também formado em dança e teatro. Ganhou
							vários prémios em concursos internacionais de canto
							em 2005. Construiu uma carreira eclética, onde
							colaborou como cantor de opera, opereta, teatro
							musical e abriu-se também à música e gestual
							barroca. Além de interprete, é encenador (opera,
							teatro, teatro musical) e formador (master-classes,
							estágios, Conservatórios Nacionais de Paris e Lyon).
							Desde 2018 que reside na ilha do Pico, onde
							desenvolve uma atividade artística, pedagógica e
							programática na Silveira (Lajes do Pico). Neste
							momento desenvolve também, como encenador, um
							projeto musical de grande envergadura, com várias
							orquestras nacionais francesas, para a altura dos
							Jogos Olímpicos Paris 2024.
						</span>
					</li>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- Nelson Ribeiro no Clarinete
						</p>
						<span className='text-justify md:w-2/3 indent-3'>
							Licenciado pela Universidade de Évora em
							Instrumentista de Sopro, na vertente de Clarinete, e
							pós-graduado em ensino, pela mesma instituição. Para
							além da sua participação como clarinetista em várias
							orquestras do panorama nacional, também incluiu
							projetos mais pessoais, entre os quais já algumas
							gravações de Cds, e também publicações e
							apresentações em diversos concertos com obras da sua
							autoria. Regularmente participa jam sessions,
							organizadas pelo grupo de música tradicional que
							ajudou a fundar, Carroça Parda, e é membro do grupo
							de música medieval, Goliardos, onde toca tarota.
							Atualmente é professor de clarinete e formação
							musical na ilha do Pico, e exerce funções como
							maestro da Filarmónica de São Roque do Pico. Com a
							cantautora Deolinda Ortins realizou espectáculos
							musicais em diversas Ilhas da Região Autónoma dos
							Açores, ajudando a disseminar a cultura açoriana
							através do arquipélago. Com ela e com o
							contrabaixista Cláudio Cruz cria o trio Sons em
							Triângulo, dedicado-se à música tradicional açoriana
							através de arranjos originais do grupo.
						</span>
					</li>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- José Sousa no Trompete
						</p>
						<span className='text-justify md:w-2/3 indent-3'>
							Natural da ilha do Pico, completou a sua formação na
							Escola de Música do Município das Lajes do Pico e no
							Ensino Artístico da Escola Básica e Secundária das
							Lajes do Pico (EBSLP). Teve várias formações e
							estágios de trompete na ilha, e atualmente é aluno
							de Trompete de Escola Profissional Artística do Alto
							do Minho (ARTEAM) desde 2020. Ganhou o 1º prémio do
							Concurso da Classe de Trompetes da EBSLP, em 2019 e
							o 2º prémio do Concurso de Trompetes da Póvoa de
							Varzim, na edição de 2020 e 2021.
						</span>
					</li>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- André Neves na Guitarra
						</p>
						<span className='text-justify md:w-2/3 indent-3'>
							André Neves na guitarra elétrica: Oriundo da ilha do
							Pico, diplomado no Curso Regular na Escola de Jazz
							Luís Villas-Boas do Hot Clube de Portugal em
							guitarra jazz e, mais recentemente, aluno na
							licenciatura em Jazz e Música Moderna na
							Universidade Lusíada. Parte da sua formação envolve
							a sua participação nas rodas de chamarrita e vários
							projetos musicais locais, como orquestras ligeiras e
							Big Bands do seu município (Lajes do Pico) e da
							cidade de Lisboa, como também, a banda Maraus,
							composta por músicos da ilha. Atualmente é membro de
							projetos estudantis como a Tuna Académica de Lisboa
							como também de projetos Pop-Rock e Jazz em Lisboa.
						</span>
					</li>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- Nuno Mendes no Contrabaixo
						</p>
						<span className='indent-10'>
							É um picaroto natural das Ribeiras que de momento se
							encontra a concluir o Mestrado em Ensino de Música,
							na vertente de Ciências Musicais, na Universidade do
							Minho. Desde 2015, durante os seus tempos como
							estudante em Lisboa, concluiu a Licenciatura em
							Ciências Musicais, seguida de uma Pós-Graduação em
							Musicologia Histórica, na NOVA-FCSH. Aí teve a
							oportunidade de ser colaborador em grupos de
							investigação no Centro de Estudos de Sociologia e
							Estética Musical, onde se focou sobre a atividade e
							os instrumentos musicais do arquipélago dos Açores.
							Desde a adolescência se interessou pelos
							instrumentos de corda, o que, associado ao gosto
							incipiente pelo jazz, levou a um interesse crescente
							pelo papel do contrabaixo neste universo. Começando
							como autodidata, decidiu aproveitar a estadia na
							capital, para aprofundar os conhecimentos neste
							instrumento na Escola de Jazz Luiz Villas-Boas do
							Hot Clube de Portugal. Ao longo do percurso musical
							integrou como coralista ou instrumentista
							(contrabaixo, guitarra, guitarra portuguesa, viola
							da terra ou percussão) as mais diversas formações:
							filarmónica, orquestra de sopros, orquestra
							sinfónica, grupo de percussão, coro e tuna. Para
							além disso, co-fundou alguns grupos musicais como o
							Grupo de Fados da Associação Académica da
							Universidade do Minho e Jazzmin.
						</span>
					</li>
					<li className='pt-5'>
						<p className='text-xl font-bold'>
							- Duarte Dutra na Bateria
						</p>
						<span className='text-justify md:w-2/3 indent-3'>
							Oriundo da ilha do Pico, Madalena, começou os seus
							estudos como autodidata, através das filarmónicas
							onde completou a sua formação através de
							masterclasses e formações para bateria. Foi também
							membro integrante da banda Nova Dinastia, onde aos
							14 anos já tinha gravado o CD “Como se não houvesse
							amanhã” com 12 temas originais. Concluiu o 5º grau
							em bateria (RSL Awards) e atualmente é professor de
							música na Escola de Música do Município das Lajes do
							Pico, onde dá aulas de percussão.
						</span>
					</li>
				</ol>
			</p>
			<p className='text-justify md:w-2/3 indent-3'>
				Estes músicos provêm de origens musicais distintas que vão da
				música clássica ao Jazz. Trabalhando a partir da Ilha do Pico,
				Jazzmin resulta da experiência musical que cada um dos seus
				elementos provém, e o resultado é uma simbiose de música
				tradicional com bastante improvisação, embebida nos exóticos
				sons da música francesa, açoriana e americana. Com uma
				sonoridade única através destas junções sonoras, o ouvinte é
				levado numa viagem sonora que cruza oceanos e continentes, desde
				a fervorosa dança ritmada, às melodia mais nostálgicas que todos
				reconhecem, misturando-as com a poética música francesa.
			</p>
			<p className='text-justify md:w-2/3 indent-3'>
				Guiados pelo timbre dos 5 instrumentos distintos e a voz única
				de Jean Daniel, compartilhamos sensações sonoras únicas, uma
				viagem a diversas emoções e êxtases, apenas possíveis com a
				essência dos Jazzmin.
			</p>
		</div>
  );
}

export default Banda
