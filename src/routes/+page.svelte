
<script>
import "../styles/home.css"
const banner = new URL('$lib/images/into-banner 1.png', import.meta.url).href
const googleImg = new URL('$lib/images/fa7d7931679b6c250489e847177ba1be.png', import.meta.url).href
$: marketTab = 0
</script>

<div class="app-homepage _686bf1d6 w1200">
    <div class="_9640f16f _86eb487d">
        <div class="content">
            <h1 class="d33f49de">Welcome to the world of crypto</h1>
            <div class="controllers">
                <button class="g-started button light">Get started</button>
                <div class="or-container">
                    <div class="line"></div>
                    <span>or</span>
                    <div class="line"></div>
                </div>
                <div class="google-container button">
                    <img src="{googleImg}" style="width: 20px; height: 20px" alt="">
                    Google
                </div>
            </div>
        </div>
        <div class="_24b300b3 _41fe8b9f font-ss3">
            <img src="{banner}" alt="">
        </div>
    </div>
    <!-- News section -->
     <div class="news-section">
        <div class="announce">
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-announcement"></use>
            </svg>
        </div>
        <div class="content">
            <!-- svelte-ignore a11y-distracting-elements -->
            <marquee behavior="" direction="">
                <span class="details">Demystifying MetaTrader 5: Tune in to Share 250,000 DOGS</span>
                <span class="details">Fortune Circles: Win iPhone 16 Pro Max and Share Up to 100,000 USDT</span>
                <span class="details">Complete the Puzzle and Win Big: 600,000 CATI Up for Grabs!</span>
            </marquee>
        </div>
        <div class="open-more">
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-direction"></use>
            </svg>
        </div>
 
     </div>


     <!-- Next trading opporturnity -->
     <div class="JsklSmkl">
        <h1 class="sectiion-title">Catch Your Next Trading Opportunity</h1>
        <button class="search-more button">
            <span>
                Search More 
            </span>
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-direction"></use>
            </svg>
        </button>
        <div class="market-containers">
            <div class="card-1">
                <div class="card-1-tabs">
                    <button on:click={()=> marketTab = 0} class="tab {marketTab ? "" : "active"}">Hot Derivatives</button>
                    <button on:click={()=> marketTab = 1} class="tab {!marketTab ? "" : "active"}">Hot Coins</button>
                </div>
                <div class="data-table">
                    <table>
                        <tr class="header-tr">
                            <th>Trading pairs</th>
                            <th>Last Trading Price</th>
                            <th>24hr Change</th>
                            <th>Charts</th>
                            <th>Trade</th>
                        </tr>
                        <tr>
                           <td></td> 
                        </tr>
                    </table>
                </div>
            </div>
        </div>
     </div>

</div>