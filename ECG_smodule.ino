int x;
double y;

void setup() {
  Serial.begin(9600);
}

void loop() {
  x = analogRead(A0);
  y = x * 2.0 / 1023.0 - 1.0;
  Serial.println(y);
}
