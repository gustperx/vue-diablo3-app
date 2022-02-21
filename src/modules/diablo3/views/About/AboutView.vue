<template>
  <div class="about-view mb-5">
    <div class="text-center">
      <h1 class="my-12 text-4xl text-bone">Diablo 3 Profile Finder</h1>

      <hr class="mb-5 bg-gray-900" />

      <p class="leading-loose">
        Diablo III is a genre-defining action-RPG set in Sanctuary, a world
        ravaged by the eternal conflict between angels and demons.
      </p>
      <p class="leading-loose">
        <span class="font-weight-bold">D3PF</span> allows you to enter your
        battle-tag to see your profile, your last played heroes, your items,
        skills and more.
      </p>
    </div>

    <hr class="my-5 bg-gray-900" />

    <div class="mt-5">
      <h2 class="mb-4 text-xl text-gray-400">API Rate Limit</h2>
      <div class="">
        Clients exceeding these limits may experience slower service or a
        response error. See the
        <a
          href="https://develop.battle.net/documentation/guides/getting-started"
          target="_blank"
          class="text-blue-300"
          >Getting Started Guide</a
        >
        for more details.
      </div>

      <dl class="mt-5 flex text-sm">
        <div class="basis-1/2">
          <dt>36,000 requests per hour</dt>
          <dd>Long-term Quota</dd>
        </div>

        <div class="basis-1/2">
          <dt>100 requests per second</dt>
          <dd>Short-term Throttle</dd>
        </div>
      </dl>
    </div>

    <div class="my-5">
      <h2 class="mb-4 text-xl text-gray-400">Getting Started</h2>

      <p class="my-2 text-gray-400">
        Before you can get started using the Blizzard APIs, you must:
      </p>

      <ol class="list-decimal">
        <li class="my-2 text-sm text-gray-300">
          Login or create a new Battle.net account.
        </li>
        <li class="my-2 text-sm text-gray-300">
          Create a client through the API Access menu option.
        </li>
        <li class="my-2 text-sm text-gray-300">
          Generate a secret for the client.
        </li>
        <li class="my-2 text-sm text-gray-300">
          Understand how Blizzard APIs work with OAuth.
        </li>
      </ol>

      <p class="text-md mt-4 text-gray-400">
        Read more here:
        <a
          href="https://develop.battle.net/documentation/guides/getting-started"
          target="_blank"
          >https://develop.battle.net/documentation/guides/getting-started</a
        >
      </p>
    </div>
  </div>
</template>
