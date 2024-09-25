<script>
    import "../styles/navbar.css"
    import {browser} from '$app/environment'
    import { app } from "$lib/store/config.store.js";

    const handleTheme = (()=>{
        if(browser){
            localStorage.setItem("theme", $app.theme ? "" : "darken" );
            $app.themeConfig($app.theme ? "" : "darken")
        }
   })

</script>

<header class="cdd74806 uniframe-root uniframe-header">
    <div class="d576b507">
      <div>
        <div class="c0f4158f">
          <a class="{$app.theme ? "darken" : ""}" href="/">ezcryptox</a>
        </div>
      </div>

      <div style="margin-right: auto;">
        {#if 950}
          <ul class="a3107c1e">
            <li>
              <button
                class="b8777ccf">
                <div class="bfe44f5e">
                  <span>buy-crypto</span>
                  <svg fill="currentColor" style="width: 13px; height: 13px;">
                    <use xlink:href="#uniframe-icon-arrow-down"></use>
                  </svg>
                </div>
                <!-- {#if showBuyCrypto}
                    <BuyCrypto />
                {/if} -->
              </button>
            </li>
            <li>
              <a class="bfe44f5e" href="/markets">
                <!----><!---->
                <span>markets</span>
              </a>
            </li>
            <li>
              <button class="b8777ccf">
                <div class="bfe44f5e">
                  <span>trade</span>
                  <svg fill="currentColor" style="width: 13px; height: 13px;">
                    <use xlink:href="#uniframe-icon-arrow-down"></use>
                  </svg>
                </div>
                <!-- {#if showTrade}
                  <Trade />
                {/if} -->
              </button>
            </li>
            <li>
              <button class="b8777ccf" >
                <div class="bfe44f5e">
                  <span>derivatives</span>
                  <svg fill="currentColor" style="width: 13px; height: 13px;">
                    <use xlink:href="#uniframe-icon-arrow-down"></use>
                  </svg>
                </div>
                <!-- {#if showDerivative}
                  <Derivative />
                {/if} -->
              </button>
            </li>
            <li>
              <a class="bfe44f5e" href="/earn">
                <!----><!---->
                <span>earn</span>
              </a>
            </li>

            <li>
              <button
                class="b8777ccf"
              >
                <div class="bfe44f5e">
                  <span>explore</span>
                  <svg fill="currentColor" style="width: 13px; height: 13px;">
                    <use xlink:href="#uniframe-icon-arrow-down"></use>
                  </svg>
                </div>
                <!-- {#if showExplore}
                  <Explore />
                {/if} -->
              </button>
            </li>
          </ul>
        {/if}
      </div>

      <div>
        {#if "!$isLogin"}
          {#if  500}
            <div class="b6d9e754">
              <a
                href="/signup"
                class="b4f29bce ce727619 f53365fb b4f29bce button"
                data-size="small"
              >
                <span>Sign Up</span>
              </a>
              <a
                href="/login"
                class="d2c677df ce727619 fc91b736 d2c677df button"
                data-size="small"
              >
                <span>Log In</span>
              </a>
            </div>
          {/if}
          <!---->
        {/if}
      </div>

      {#if  1130}
        <div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div on:click={handleTheme} class="c9759bc4">
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-sun"></use>
            </svg>
         </div>


           <!-- svelte-ignore a11y-unknown-aria-attribute -->
          <div class="dd8dbce9" aria-account-unread="0">
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-notification"></use>
            </svg>
            <div class="c3288ade" aria-is-login="false" style="display: none;">
                <!---->
                <main class="dad95e88">
                    <div class="c2d29119" accountunreadcount="0">
                        <nav>
                            <li>
                                <div class="a7c0fc49" aria-read-status="-1">
                                    <div class="eb25c4fd">
                                        <div class="b75ca08f">
                                            <img src="https://static.poloniex.com/vip.png" alt="360002708213">
                                            <span>New Coin Listings</span>
                                        </div>
                                        <span>2024-09-25 05:23:09</span>
                                    </div>
                                    <a href="https://support.poloniex.com/hc/en-us/articles/26611560430999-New-Listing-SunJoker-SUNJOKER" target="_blank" class="a1089035">New Listing: SunJoker (SUNJOKER)</a><!---->
                                </div>
                            </li>
                        </nav>
                    </div>
                </main>
                <div class="c22446a5">
                    <a target="_blank" href="/notifications">
                        <span>View All</span>
                        <svg fill="currentColor" style="width: 16px; height: 16px;">
                            <use xlink:href="#uniframe-icon-arrow-right-2"></use>
                        </svg>
                    </a>
                <!---->
                </div>
            </div>
        </div>
        <a href="/?https://support.poloniex.com" target="_blank" rel="noopener noreferrer" class="a9d0f06a">
            <svg fill="currentColor" style="width: 20px; height: 20px;">
                <use xlink:href="#uniframe-icon-support"></use>
            </svg>
        </a>

          <button class="eb58c575" >
            <span>EN</span>
            <svg fill="currentColor" style="width: 13px; height: 13px;">
              <use xlink:href="#uniframe-icon-arrow-down"></use>
            </svg>
          </button>
        </div>
      {:else}
        <div>
          <button
            class="d5236253 ">
            <i></i><i></i><i></i>
          </button>
          <!-- {#if is_menu}
            <MobileMenu on:close={() => (is_menu = false)} />
          {/if} -->
        </div>
      {/if}
    </div>
  </header>