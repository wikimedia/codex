// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`matches the snapshot Case 0 Default props: ({}) => HTML 1`] = `
<div
  aria-description="Press Enter to edit or Delete to remove"
  class="cdx-input-chip"
  role="option"
  tabindex="0"
>
  <!--v-if-->
  <span
    class="cdx-input-chip__text"
  >
    <!-- @slot Chip text. -->
    
    <p>
      Chip content
    </p>
    
  </span>
  <cdx-button-stub
    action="default"
    aria-hidden="true"
    class="cdx-input-chip__button"
    disabled="false"
    id="cdx-input-chip-remove-0"
    size="medium"
    tabindex="-1"
    weight="quiet"
  />
</div>
`;

exports[`matches the snapshot Case 1 Disabled: ({"disabled": true}) => HTML 1`] = `
<div
  aria-description="Press Enter to edit or Delete to remove"
  class="cdx-input-chip cdx-input-chip--disabled"
  role="option"
  tabindex="0"
>
  <!--v-if-->
  <span
    class="cdx-input-chip__text"
  >
    <!-- @slot Chip text. -->
    
    <p>
      Chip content
    </p>
    
  </span>
  <cdx-button-stub
    action="default"
    aria-hidden="true"
    class="cdx-input-chip__button"
    disabled="true"
    id="cdx-input-chip-remove-1"
    size="medium"
    tabindex="-1"
    weight="quiet"
  />
</div>
`;

exports[`matches the snapshot Case 2 Icon: ({"icon": [Object]}) => HTML 1`] = `
<div
  aria-description="Press Enter to edit or Delete to remove"
  class="cdx-input-chip"
  role="option"
  tabindex="0"
>
  <cdx-icon-stub
    icon="[object Object]"
    iconlabel=""
    size="small"
  />
  <span
    class="cdx-input-chip__text"
  >
    <!-- @slot Chip text. -->
    
    <p>
      Chip content
    </p>
    
  </span>
  <cdx-button-stub
    action="default"
    aria-hidden="true"
    class="cdx-input-chip__button"
    disabled="false"
    id="cdx-input-chip-remove-2"
    size="medium"
    tabindex="-1"
    weight="quiet"
  />
</div>
`;
