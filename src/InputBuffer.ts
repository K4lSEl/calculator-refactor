export class InputBuffer {
  constructor(
    private readonly maxDigits: number,
    private value = "",
  ) {}
  public pushDigit(d: number): void {
    /* 桁上限・先頭0制御 */
    if (this.digitCount() >= this.maxDigits) {
      return;
    }

    if (this.value === "0") {
      this.value = String(d);
    } else {
      this.value = this.value + d;
    }
  }
  public pushDecimal(): void {
    /* 重複防止・0.補完 */
    if (this.value.includes(".")) {
      return;
    }

    if (this.value === "") {
      this.value = "0.";
    } else {
      this.value = this.value + ".";
    }
  }

  // 覚えている入力を空にする
  public clear(): void {
    this.value = "";
  }

  // 文字列を数値に変える
  public toNumber(): number {
    return Number(this.value || 0);
  }

  public isEmpty(): boolean {
    return this.value.length === 0;
  }

  // 桁数を数えるだけの処理
  // 小数点とマイナスを除く処理
  public digitCount(): number {
    return this.value.replace(/[.\-]/g, "").length;
  }
}
