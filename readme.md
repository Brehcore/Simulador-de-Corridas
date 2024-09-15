<h1> Desafio - Simulador de Corridas do Mario Kart</h1>
<h2>Sobre o Projeto</h2>
Este projeto é um simulador de corridas com personagens icônicos, onde os usuários podem escolher dois competidores e acompanhá-los em uma corrida dinâmica e imprevisível. 

O simulador combina elementos de estratégia, aleatoriedade e interação direta com o usuário, criando uma experiência de jogo envolvente.  
O projeto foi desenvolvido utilizando Node.js, aproveitando suas capacidades assíncronas e de entrada/saída para criar um fluxo contínuo de interação.  


<h3>Mario Kart</h3>
<table>
<td>
<img src="./Simulador-de-corridas/docs/All.gif" alt="Mario" width="70">
</td>
</table>
<h6>Mario Kart é uma das séries de jogos de corrida mais icônicas da Nintendo. 
 
Lançada pela primeira vez em 1992 com "Super Mario Kart" para o Super Nintendo Entertainment System (SNES), a série é conhecida por seu estilo divertido e caótico, que mistura corridas rápidas com elementos de combate e power-ups.</h6>



<h3>Jogadores</h3>
<table>
<tr>
    <td align="center">
        <p><b>Mario</b></p>
        <img src="./Simulador-de-corridas/docs/Mario.gif" alt="Mario" width="70">
    </td>
    <td>
        <p>Velocidade: 4</p>
        <p>Manobrabilidade: 3</p>
        <p>Poder: 3</p>
    </td>
    <td align="center">
        <p><b>Luigi</b></p>
        <img src="./Simulador-de-corridas/docs/Luigi.gif" alt="Luigi" width="100">
    </td>
    <td>
        <p>Velocidade: 3</p>
        <p>Manobrabilidade: 3</p>
        <p>Poder: 4</p>
    </td>
    <td align="center">
        <p><b>Peach</b></p>
        <img src="./Simulador-de-corridas/docs/Peach.gif" alt="Peach" width="70">
    </td>
    <td>
        <p>Velocidade: 4</p>
        <p>Manobrabilidade: 4</p>
        <p>Poder: 2</p>
    </td>

<tr>
    <td align="center">
        <p><b>Bowser</b></p>
        <img src="./Simulador-de-corridas/docs/Bowser.gif" alt="Bowser" width="100">
    </td>
    <td>
        <p>Velocidade: 5</p>
        <p>Manobrabilidade: 2</p>
        <p>Poder: 5</p>
    </td>
    <td align="center">
        <p><b>Toad</b></p>
        <img src="./Simulador-de-corridas/docs/Toad.gif" alt="Toad" width="70">
    </td>
    <td>
        <p>Velocidade: 3</p>
        <p>Manobrabilidade: 5</p>
        <p>Poder: 1</p>
    </td>
    <td align="center">
        <p><b>Yoshi</b></p>
        <img src="./Simulador-de-corridas/docs/Yoshi.gif" alt="Yoshi" width="70">
    </td>
    <td>
        <p>Velocidade: 3</p>
        <p>Manobrabilidade: 3</p>
        <p>Poder: 3</p>
    </td>
</tr>
</table>
<h3><p><b>Como Jogar:</b></h3>

Escolha dos Personagens:
Cada jogador escolhe um personagem de uma lista predefinida, como Mario, Luigi, Peach, Bowser, Toad, ou Yoshi.  
Os personagens têm atributos únicos: Velocidade, Manobrabilidade e Poder, que influenciam o desempenho nas corridas.  

Rodadas de Corrida:
O jogo é dividido em 5 rodadas.  
Em cada rodada, um bloco de pista é sorteado, podendo ser "RETA", "CURVA" ou "CONFRONTO".  
RETA: Corridas baseadas na Velocidade dos personagens.  
CURVA: Corridas baseadas na Manobrabilidade dos personagens.  
CONFRONTO: Uma disputa direta onde os personagens usam seu Poder para ganhar vantagem.  

Confronto Direto:
Quando o bloco é "CONFRONTO", o personagem com o maior resultado de Poder ganha a rodada e o adversário pode perder pontos.  

Pontuação:
Os pontos são ganhos ou perdidos com base no resultado das corridas e confrontos.  
Após cada rodada, o jogador com o maior resultado na habilidade relevante (Velocidade ou Manobrabilidade) ganha um ponto.  

Declaração do Vencedor:
Após 5 rodadas, o jogador com mais pontos é declarado o vencedor da corrida.  
Em caso de empate, a corrida é considerada um empate.  

Objetivo Final: 
Ganhe o maior número de pontos possível através de corridas e confrontos para ser coroado o vencedor da corrida.</p>

