function DynamicParams(props) {
  if (props.entries.length <= 0) {
    return null;
  }
    return props.entries.map((entry, index) => (
        <option key={index} value={entry["paramValue"]}>{entry["paramValue"]}</option>
    ));

}

export default DynamicParams;
