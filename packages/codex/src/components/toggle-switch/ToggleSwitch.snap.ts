// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`matches the snapshot Case 0 Default: ({"modelValue": false}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    id="cdx-toggle-switch-0"
    type="checkbox"
    value="false"
  />
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
  <!-- Only render a Label component if label text has been provided. This component can also
			supply a description to the input if content is provided in the description slot. -->
  <div
    class="cdx-label cdx-toggle-switch__label"
  >
    <label
      class="cdx-label__label"
      for="cdx-toggle-switch-0"
    >
      <span>
        <!--v-if-->
        <span
          class="cdx-label__label__text"
        >
          <!-- @slot Label text. -->
          
          
          Label
          
          
        </span>
        <!--v-if-->
      </span>
      <!-- For legends, the description needs to be inside the &lt;legend&gt; for screen reader
				support. -->
      <!--v-if-->
    </label>
    <!-- For single fields, add an ID attribute that will be used on the input for
			aria-describedby. -->
    <!--v-if-->
  </div>
</span>
`;

exports[`matches the snapshot Case 1 Disabled: ({"disabled": true, "modelValue": false}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    class="cdx-toggle-switch__input"
    disabled=""
    id="cdx-toggle-switch-2"
    type="checkbox"
    value="false"
  />
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
  <!-- Only render a Label component if label text has been provided. This component can also
			supply a description to the input if content is provided in the description slot. -->
  <div
    class="cdx-label cdx-label--disabled cdx-toggle-switch__label"
  >
    <label
      class="cdx-label__label"
      for="cdx-toggle-switch-2"
    >
      <span>
        <!--v-if-->
        <span
          class="cdx-label__label__text"
        >
          <!-- @slot Label text. -->
          
          
          Label
          
          
        </span>
        <!--v-if-->
      </span>
      <!-- For legends, the description needs to be inside the &lt;legend&gt; for screen reader
				support. -->
      <!--v-if-->
    </label>
    <!-- For single fields, add an ID attribute that will be used on the input for
			aria-describedby. -->
    <!--v-if-->
  </div>
</span>
`;

exports[`matches the snapshot Case 2 With description: ({"modelValue": false}) => HTML 1`] = `
<span
  class="cdx-toggle-switch"
>
  <input
    aria-describedby="cdx-description-5"
    class="cdx-toggle-switch__input"
    id="cdx-toggle-switch-4"
    type="checkbox"
    value="false"
  />
  <span
    class="cdx-toggle-switch__switch"
  >
    <span
      class="cdx-toggle-switch__switch__grip"
    />
  </span>
  <!-- Only render a Label component if label text has been provided. This component can also
			supply a description to the input if content is provided in the description slot. -->
  <div
    class="cdx-label cdx-toggle-switch__label"
  >
    <label
      class="cdx-label__label"
      for="cdx-toggle-switch-4"
    >
      <span>
        <!--v-if-->
        <span
          class="cdx-label__label__text"
        >
          <!-- @slot Label text. -->
          
          
          Label
          
          
        </span>
        <!--v-if-->
      </span>
      <!-- For legends, the description needs to be inside the &lt;legend&gt; for screen reader
				support. -->
      <!--v-if-->
    </label>
    <!-- For single fields, add an ID attribute that will be used on the input for
			aria-describedby. -->
    <span
      class="cdx-label__description"
      id="cdx-description-5"
    >
      <!-- @slot Short description text. -->
      
      <!-- @slot Short description text. -->
      
      Description text
      
      
    </span>
  </div>
</span>
`;
