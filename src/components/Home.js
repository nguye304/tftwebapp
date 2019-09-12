import React from 'react';
import '../style/home.css';
function Home(){

    return(
        <div>
            <h1>Home.js</h1>
            <div class="home-container">
                <div class="tft-explanation">
                    <h1>What is TFT?</h1>
                    <p>Tft a round-based strategy game that pits you against seven opponents in a free-for-all race to build a powerful team that fights on your behalf. Your goal: Be the last person standing.</p>
                </div>
             
                <div class = "tft-mechanics">
                    <h1>TFT Mechanics</h1>
                    <p>Spend gold in the shop between each round to acquire new champions to your team.</p>
                    <p>Champions with similar traits unlock combat bonuses!</p>
                    <p>Combine three of the same unit to unlock a stronger version of that Champion!</p>
                    <p>Team composition and positioning make the difference in this game mode.</p>
                    <p>You can earn extra gold per turn based on wins, streaks, and interest.</p>
                    <p>Interest is when you gain an additional gold for every 10 that you have in your bank!</p>
                </div>
                <div class ="patch-notes">
                    <h1>Recent Patch Notes</h1>
                    <p>They added pantheon</p>
                </div>
            </div>
           
          
        </div>
    )
}
export default Home;