<script>
	import '../styles/footer.css';
	import { _ } from 'svelte-i18n';
	import { app } from "$lib/store/config.store.js";
	// import Language from './navbar-components/language.svelte';
	
	let showLanguageModal = false;

	$: currentLang = 'English'
</script>
<!-- <Language {showLanguageModal} onSelectedLang={ curr => currentLang = curr} on:click={() => (showLanguageModal = false)}/> -->
<div id="uniframe-footer" class="footer-wrapper" data-v-app>
	<footer class="beb6dc28 uniframe-root">
		<div class="e2fff687">
			<section class="ce1f9e13">
				<aside class="fa9ae9d7">
					<div class="eb13f307">
						<h2>start trading</h2>
						<div class="bb407533">
							<a href="/signup" class="abc20fb3" aria-label="signup">Sign Up</a>
							<a href="/login" class="abc20fb3" aria-label="login">Log In</a>
						</div>
						<div class="ca0fb6d9">
							institution investor
							<a
								href="/support"
								aria-label="institutional investor"
								rel="noopener noreferrer nofollow"
							>
								 learn more
							</a>
						</div>
					</div>
					<!---->
				</aside>
				<main class="e5cc3d28">
					<div class="">
						<div class="a1d7703b">Global Language</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div on:click={() => showLanguageModal = true} class="fa317b72">{currentLang}<svg fill="currentColor" style="width: 24px; height: 24px;">
								<use xlink:href="#uniframe-icon-arrow-down"></use>
							</svg>
						</div>
					</div>
					<div class="d83dcb4c">
						<div class="ba496403">About</div>
						<ul>
							<li>
								<a href="fee" aria-label="fees" rel="noopener noreferrer nofollow">Fees</a>
							</li>
							<li>
								<a href="leaderboard" aria-label="leaderboard" rel="noopener noreferrer nofollow"
									>{ "leaderboard"}</a
								>
							</li>
							<li>
								<a href="referral" aria-label="referral" rel="noopener noreferrer nofollow"
									>{ "Referrals"}</a
								>
							</li>
							<li>
								<a href="learn/defi" aria-label="defi" rel="noopener noreferrer nofollow">{ "Defi"}</a>
							</li>
						</ul>
					</div>
					<div class="d83dcb4c">
						<div class="ba496403">{"Futures" }</div>
						<ul>
							<li>
								<a
									href="futures/trade/BTCUSDTPERP"
									aria-label="futures trade"
									rel="noopener noreferrer nofollow">{ "g-futures-trade" }</a
								>
							</li>
							<li>
								<a
									href="futures/contract/detail/BTCUSDTPERP"
									aria-label="contract information"
									rel="noopener noreferrer nofollow">{"contract-info" }</a
								>
							</li>
							<li>
								<a href="support" rel="noopener noreferrer nofollow">{ "contract-guide" }</a>
							</li>
						</ul>
					</div>
					<div class="d83dcb4c">
						<div class="ba496403">{ "Support" }</div>
						<ul>
							<li>
								<a href="support" aria-label="contact support" rel="noopener noreferrer nofollow"
									>{ "contact-support"}</a
								>
							</li>
							<li>
								<a href="support" aria-label="token listing" rel="noopener noreferrer nofollow"
									>{ "token-listing" }</a
								>
							</li>
						</ul>
					</div>
					<div class="d83dcb4c">
						<div class="ba496403">{ "social" }</div>
						<ul>
							<li>
								<a href="?twitter" aria-label="twitter" rel="noopener noreferrer nofollow"
									>{ "twitter" }</a
								>
							</li>
							<li>
								<a
									href="/twitter.com/PoloSupport"
									aria-label="support twitter"
									rel="noopener noreferrer nofollow">{ "support-twitter" }</a
								>
							</li>
							<li>
								<a href="?t.me" aria-label="telegram" rel="noopener noreferrer nofollow">{ "telegram" }</a
								>
							</li>
							<li>
								<a href="?weibo" aria-label="weibo" rel="noopener noreferrer nofollow">{'weibo'}</a>
							</li>
						</ul>
					</div>
				</main>
			</section>
			<section class="c17a4fd0">
				<div class="f234f27f">
					<!-- <a class="{$app.theme ? "darken" : ""}" href="/">ezcryptox</a> -->
					<span>© Ezcryptox 2024</span>
				</div>
				<nav class="a174fe8c">
					<a href="/support/terms">{ "user-agreement" }</a>
					<a href="/support/privacy">{ "privacy-policy"}</a>
					<a href="/support/cookie-policy">{ "cookie-policy"}</a>
					<a href="/support/e-sign-consent">{ ("e-sign-consent") }</a>
				</nav>
			</section>
		</div>
	</footer>
</div>
<style>
</style>