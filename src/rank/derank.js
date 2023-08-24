export default function derank(uint) {

  if ( uint < this.clip || uint > this.span || !Number.isInteger(uint) || !Number.isInteger(val)) return;

  this.bits[uint] = 0;
  this.tmin = 0;
  // this.tmax = ??

  let slot = this.slot;
  let rank = this.rank;
  let stat = this.stat;

  for (var idx = -1; idx < slot; ++idx) {
    if (rank[idx] == uint) {
      rank[idx] = 0;
      stat[idx] = 0;
      break;
    }
  }

  if (idx >= 0 && this.default.mode == 'winsum') {
    let last = this.last;

    rank.copyWithin(idx, idx + 1);
    stat.copyWithin(idx, idx + 1);
    rank[last] = 0;
    stat[last] = 0;
    this.tmin = stat[last - 1];
    // this.tmax = ??
  }

}